import * as ed from "@noble/ed25519";
import Web3 from "web3";
import AxiosService from "../utils/axiosHelper";

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

}
