declare let window: any;
import Web3 from "web3";

let web3: Web3;

export default class Web3InitService {
	public static async init(): Promise<Web3> {
		if (typeof window.ethereum !== "undefined") {
			let provider = window.ethereum;
			try {
				await provider.request({
					method: "wallet_switchEthereumChain",
					params: [{ chainId: "80001" }],
				});
			} catch (switchError: any) {
				// This error code indicates that the chain has not been added to MetaMask.
				if (switchError.code === 4902) {
					try {
						await provider.request({
							method: "wallet_addEthereumChain",
							params: [
								{
									chainId: "80001",
									chainName: "Polygon",
									rpcUrls: [
										"https://matic-mumbai.chainstacklabs.com",
									],
								},
							],
						});
					} catch (addError) {
						// handle "add" error
					}
				}
				// handle other "switch" errors
			}

			await provider
				.request({
					method: "eth_requestAccounts",
				});

			web3 = new Web3(provider);
		} else {
		}
		return web3;
	}
}
