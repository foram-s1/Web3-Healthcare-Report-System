import * as ed from "@noble/ed25519";
import Web3 from "web3";
import AxiosService from "../utils/axiosHelper";
import ReportService from "./reportService";

export default class BackendService {
	public static async registerUser(
		name: string,
		user_type: string,
		provider: Web3
	) {
		let publicKey = "";
		if (user_type === "hospital") {
			const privateKey = new TextDecoder().decode(
				ed.utils.randomPrivateKey()
			);
			publicKey = new TextDecoder().decode(
				await ed.getPublicKey(privateKey)
			);

			var ele = document.createElement("a");
			ele.setAttribute(
				"href",
				"data:text/plain;charset=utf-8," +
					encodeURIComponent(privateKey)
			);
			ele.setAttribute("download", "private.key");

			ele.style.display = "none";
			document.body.appendChild(ele);

			ele.click();

			document.body.removeChild(ele);
		}
		AxiosService.post("/register", {
			full_name: name,
			user_type: user_type,
			public_key: publicKey,
			wallet: (await provider.eth.getAccounts())[0],
		}).then((res) => {
			console.log(res);
		});
	}

	public static async createReport(
		provider: Web3,
		file: FormData,
		report: any
	) {
		return AxiosService.post("/uploadMRI", file).then((res) => {
			let originalImage = res.data.scan.Hash;
			let maskedImage = res.data.mask.Hash;
			report = { ...report, originalImage, maskedImage };

			return ReportService.createReport(provider, report).then((res) => {
				if (res !== false) {
					return AxiosService.post("/uploadReport", {
						contract: res,
						patient: report.userAddress,
						hospital: report.doctorAddress,
					})
						.then((res) => {
							console.log(res);
							return true;
						})
						.catch((err) => {
							console.log(err);
							return false;
						});
				} else {
					return false;
				}
			});
		});
	}

	public static async getAllReportsByHospital(
		provider: Web3,
		hospital: string
	) {
		return AxiosService.get("/getAllReports")
			.then((res) => {
				return res.data
					.filter((el: any) => {
						return el.hospital == hospital;
					})
					.map(async (el: any) => {
						return await ReportService.getReportData(
							provider,
							el.contract
						)
							.then((reportData) => {
								return reportData;
							})
							.catch((err) => {
								return null;
							});
					});
			})
			.catch((err) => {
				console.log(err);
				return false;
			});
	}

	public static async getAllReportsByPatient(
		provider: Web3,
		patient: string
	) {
		return AxiosService.get("/getAllReports")
			.then((res) => {
				return res.data
					.filter((el: any) => {
						return el.patient == patient;
					})
					.map(async (el: any) => {
						return await ReportService.getReportData(
							provider,
							el.contract
						)
							.then((reportData) => {
								return reportData;
							})
							.catch((err) => {
								return null;
							});
					});
			})
			.catch((err) => {
				console.log(err);
				return false;
			});
	}
}
