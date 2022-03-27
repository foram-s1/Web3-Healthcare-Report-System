import Web3 from "web3";
import AxiosService from "../utils/axiosHelper";
import Web3InitService from "./web3initService";

export default class AuthService {
	
	public static async getStatus() {
		let provider: any = Web3InitService.checkLogin();
		if (provider === false) {
			return false;
		} else {
			return true;
		}
	}

	public static async login() {
		Web3InitService.init();
	}

	public static async userData() {
		return {
			name: "John Doe",
			email: "jhon@email.com",
			address: "0x1234567890123456789012345678901234567890",
			type: "Lab",
		}
	}

	public static async getProvider() {
		let provider: any = Web3InitService.checkLogin();
		if (provider === false) {
			return false;
		} else {
			return provider;
		}
	}
}
