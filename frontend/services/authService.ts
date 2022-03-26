import AxiosService from "../utils/axiosHelper";

export default class AuthService {
	public static getToken() {
		return window.localStorage.getItem("token");
	}

	public static getStatus() {
		const token = this.getToken();
		if (token && token !== "") {
			var payload: any = token.split(".")[1];
			payload = JSON.parse(window.atob(payload));
			// if (payload.exp < Date.now()) {
            //     this.logout();
            //     return false;
			// }
            return payload;
		}
		return false;
	}

	private static setToken(token: string) {
		return window.localStorage.setItem("token", token);
	}

	public static logout() {
		return window.localStorage.removeItem("token");
	}

	public static async login(email: string, password: string) {
		if (this.getStatus() == false)
			return AxiosService.post("/user/login", {
				email,
				password,
			})
				.then((res) => {
					if (res.data.token) this.setToken(res.data.token);
					return res.data;
				})
				.catch((err) => {
					if (err.response) return err.response.data;
					else {
						return {
							success: false,
							message: "Something went wrong !! ",
						};
					}
				});
		else
			return {
				success: true,
			};
	}

	public static async list() {
		return AxiosService.get("/user/", {
			headers: {
				Authorization: this.getToken(),
			},
		})
			.then((res) => {
				return res.data;
			})
			.catch((err) => {
				if (err.response) return err.response.data;
				else {
					return {
						success: false,
						message: "Something went wrong !! ",
					};
				}
			});
	}
}
