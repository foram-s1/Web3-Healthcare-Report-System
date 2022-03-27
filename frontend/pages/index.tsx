import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Navbar from "../components/navbarComponent";
import Laboratory from "../components/LaboratoryComponent";
import { AuthContext } from "../contexts/authContext";
import { useContext, useState, useEffect } from "react";
import ConnectToMetamask from "../components/ConnectToMetamask";
import RegisterDialog from "../components/RegisterDialog";
import Hospital from "../components/Hospital";
import Patient from "../components/Patient";
const Home: NextPage = () => {
	const [openConnectToWalletDialog, setOpenConnectToWalletDialog] =
		useState(false);
	const { user, login } = useContext(AuthContext);
	const [openRegister, setOpenRegister] = useState(false);

	useEffect(() => {
		if(!user.logged){
			setOpenConnectToWalletDialog(true);
		}else{
			setOpenConnectToWalletDialog(false);
		}
	},[user])

	return (
	
		<div >
			{user.logged && 
			<>
			<Navbar/>
			<Patient />
			{/* <Laboratory /> */}

			{/* <Hospital /> */}
			
			</>
			}
			{/* <Navbar/>
			<div className="container-fluid">
			</div> */}
			{/* <Laboratory	 /> */}
			
			<ConnectToMetamask
				open={openConnectToWalletDialog}
				close={() => setOpenConnectToWalletDialog(false)}
			/>
			<RegisterDialog
				open={openRegister}
				close={() => setOpenRegister(false)}
			/>
		</div>
	);
};

export default Home;
