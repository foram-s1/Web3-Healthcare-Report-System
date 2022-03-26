import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { AuthContext } from "../../contexts/authContext";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { user, login } = useContext(AuthContext);

	return (
		<>
			<div className="d-flex flex-wrap vh-100">
				<div className="col-lg-6 d-lg-flex d-md-flex d-none justify-content-center align-items-center col-md-12  ">
					<img src="/assets/login.svg" className="img-fluid d-inline-ce" alt="logo" />
				</div>
				<div className="col-lg-6 col-md-12">
					<div className="d-flex flex-wrap justify-content-center align-items-center">
						<h2>Hello Again!</h2>
					</div>
				</div>

			</div>
			
		</>
	);
}
