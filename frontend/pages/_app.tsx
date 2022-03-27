import "../styles/globals.css";
import type { AppProps } from "next/app";
import LoaderContextProvider from "../contexts/loaderContext";
import AuthContextProvider, { AuthContext } from "../contexts/authContext";
import LoaderComponent from "../components/loaderComponent";
import { useContext, useEffect } from "react";

function AuthIntialize() {
	const { user, checkStatus } = useContext(AuthContext);

	useEffect(() => {
		checkStatus();
	}, []);

	useEffect(() => {
		if (user.logged) {
			console.log("User is logged in");
		} else {
			console.log("User is not logged in");
		}
		console.log(user);
	}, [user]);

	return <></>;
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthContextProvider>
			<AuthIntialize />
			<LoaderContextProvider>
				<LoaderComponent />
				<Component {...pageProps} />
			</LoaderContextProvider>
		</AuthContextProvider>
	);
}

export default MyApp;
