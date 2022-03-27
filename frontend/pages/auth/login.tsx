import { useEffect, useContext, useState } from "react";
import LoginForm from "../../components/loginComponent";
import { AuthContext } from "../../contexts/authContext";
import RegisterForm from "../../components/registerComponent";
import RegisterDialog from "../../components/RegisterDialog";
import ConnectToMetamask from "../../components/ConnectToMetamask";
import LoginComponent from "../../components/loginComponent";

export default function Login() {
	const [isLogin, setIsLogin] = useState(false);
	const [openConnectToWalletDialog, setOpenConnectToWalletDialog] =
		useState(false);
	const { user, login } = useContext(AuthContext);
	const [openRegister, setOpenRegister] = useState(true);

	useEffect(() => {
		if(!user.logged){
			setOpenConnectToWalletDialog(true);
		}else{
			setOpenConnectToWalletDialog(false);
		}
	},[user])

	return (
		<>
			<div className="d-flex flex-wrap p-4 vh-100 overflow-hidden">
				<div className="col-lg-6 d-lg-flex px-3 d-md-flex d-none justify-content-center align-items-center col-md-12  ">
					<img src="/assets/login.svg" className="img-fluid d-inline-ce" alt="logo" />
				</div>
				<div className="col-lg-6 col-md-12">
					<div className="text-center">
						
						{isLogin ? <RegisterForm open={openRegister}
								close={() => setOpenRegister(false)}
						 	/> : <LoginComponent open={openConnectToWalletDialog}
							 	close={() => setOpenConnectToWalletDialog(false)}
							/> }
					</div>
				</div>
			</div>
			
		</>
	);
}
