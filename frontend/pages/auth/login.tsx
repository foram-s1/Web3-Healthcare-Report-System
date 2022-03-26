import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { user, login } = useContext(AuthContext);

	useEffect(() => {
		if(user.logged == true){
			window.location.href = '/';
		}
	}, [user]);

	return (
		<>
			<Head>
				<title>Login Page</title>
			</Head>
			<div>
				<h1 style={{ textAlign: "center" }}>Login Page</h1>
			</div>
			<br />
			<div>
				<h4 style={{ textAlign: "center" }}>
					Username:
					<input
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
						type="text"
					/>
				</h4>
				<h4 style={{ textAlign: "center" }}>
					Password:
					<input
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						type="password"
					/>
				</h4>
				<h4 style={{ textAlign: "center" }}>
					<button
						onClick={async () => {
							let ans: any = await login(username, password);
							if(ans.success == false){
								alert(ans.message);
							}
						}}
					>
						Login
					</button>
				</h4>
			</div>
		</>
	);
}
