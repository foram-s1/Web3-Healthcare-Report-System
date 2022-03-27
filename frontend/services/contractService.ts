import Web3 from "web3";
import * as contract from "./Master.json";
export default class ReportService {
	public static async createReport(provider: Web3) {
		let reportContract = new provider.eth.Contract(
			contract.abi,
			"0xCcEC671c7F457B43389Dc656eb326B7F5AdC042C"
		);

		reportContract.methods
			.createImageReport(
				"0xA3A968Fdc163A3b65400Efa2719f948e5ECBc132",
				"0xA3A968Fdc163A3b65400Efa2719f948e5ECBc132",
				"Brain MRI",
				"testing 1",
				"testing 1"
			)
			.send({ from: (await provider.eth.getAccounts())[0] })
			.then(console.log);
	}
}
