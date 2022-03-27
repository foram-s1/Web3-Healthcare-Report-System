import { createContext, useState } from "react";
import AuthService from "../services/authService";

export const AuthContext = createContext({
	user: { logged: false, user: {}, provider: null },
	login: () => {},
	checkStatus: () => {},
});

export default function AuthContextProvider(props: any) {
	const [user, setUser] = useState({
		logged: false,
		user: {},
		provider: null,
	});

	const login = async () => {
		await AuthService.login();
		const provider = await AuthService.getProvider();
		const user = await AuthService.userData();
		setUser({ logged: provider !== false, user, provider });
	};

	const checkStatus = async () => {
		const provider = await AuthService.getProvider();
		const user = await AuthService.userData();
		setUser({ logged: provider !== false, user, provider });
	};

	return (
		<AuthContext.Provider value={{ user, login, checkStatus }}>
			{props.children}
		</AuthContext.Provider>
	);
}
