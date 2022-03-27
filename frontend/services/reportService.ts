import Web3 from "web3";
const mastereContract = require("./Master.json");
const report = require("./ImageReport.json");
import * as ed from "@noble/ed25519";

export default class ReportService {
	public static async createReport(provider: Web3, report: any) {
		let reportContract = new provider.eth.Contract(
			mastereContract.abi,
			"0xCcEC671c7F457B43389Dc656eb326B7F5AdC042C"
		);

		return reportContract.methods
			.createImageReport(
				report.userAddress,
				report.doctorAddress,
				report.reportType,
				report.originalImage,
				report.maskedImage
			)
			.send({ from: (await provider.eth.getAccounts())[0] })
			.then((res: any) => {
				return res.events.ReportCreated.returnValues.reportAddress;
			}).catch((err: any) => {
				console.log(err);
				return null;
			});
	}

	public static async signReport(
		provider: Web3,
		reportAddress: string,
		signature: string,
		analysis: string,
		diagnosis: string
	) {
		let reportContract = new provider.eth.Contract(
			report.abi,
			reportAddress
		);

		signature = new TextDecoder().decode(await ed.sign(`${reportAddress}${analysis}${diagnosis}`, signature));

		reportContract.methods.setData(analysis, diagnosis, signature).send({
			from: (await provider.eth.getAccounts())[0],
		});
	}

	private static async getOneField(
		provider: Web3,
		reportAddress: string,
		field: string
	) {
		let reportContract = new provider.eth.Contract(
			report.abi,
			reportAddress
		);

		return {
			data: await reportContract.methods[field].call(),
			field: field,
		};
	}

	public static async getReportData(provider: Web3, reportAddress: string) {
		let promises = [];
		promises.push(this.getOneField(provider, reportAddress, "getAnalysis"));
		promises.push(
			this.getOneField(provider, reportAddress, "getDiagnosis")
		);
		promises.push(
			this.getOneField(provider, reportAddress, "getOriginalImage")
		);
		promises.push(
			this.getOneField(provider, reportAddress, "getMaskedImage")
		);
		promises.push(
			this.getOneField(provider, reportAddress, "getReportType")
		);
		promises.push(
			this.getOneField(provider, reportAddress, "getSignature")
		);

		return Promise.all(promises).then((values) => {
			let reportData: any = {};
			values.forEach((value) => {
				reportData[value.field] = value.data;
			});
			return reportData;
		});
	}
}
