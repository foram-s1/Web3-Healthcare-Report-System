import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Navbar from "../components/navbarComponent";
import Laboratory from "../components/LaboratoryComponent";
const Home: NextPage = () => {

	return (
		
		<div >
			{/* <Navbar/>
			<div className="container-fluid">
			</div> */}
			<Laboratory	 />
		</div>
	);
};

export default Home;
