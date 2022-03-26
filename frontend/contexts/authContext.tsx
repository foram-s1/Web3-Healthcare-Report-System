import { createContext, useEffect, useState } from "react";
import AuthService from "../services/authService";

export const AuthContext = createContext({user: {logged: false, user: {}}, login: (email: string, password: string) => {}, logout: () => {}, checkStatus: () => {}});

export default function AuthContextProvider(props: any) {
	const [user, setUser] = useState({ logged: false, user: {} });

	const login = async (email: string, password: string) => {
		return AuthService.login(email, password).then((res) => {
			if (res.success) {
				setUser({ logged: true, user: AuthService.getStatus() });
			} else {
				setUser({ logged: false, user: {} });
			}
			return res;
		});
	};

	const logout = async () => {
		setUser({ logged: false, user: {} });
		return AuthService.logout();
	};

	const checkStatus = async () => {
		let payload = AuthService.getStatus();
		if (payload && payload != false) {
			setUser({ logged: true, user: payload });
		} else {
			setUser({ logged: false, user: {} });
		}
	}

	return (
		<AuthContext.Provider value={{ user, login, logout, checkStatus }}>
			{props.children}
		</AuthContext.Provider>
	);
}
