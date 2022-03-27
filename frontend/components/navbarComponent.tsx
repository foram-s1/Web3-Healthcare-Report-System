import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";

export default function Navbar(props: any) {
	const [isLogin, setIsLogin] = useState(true);
    const { user, login } = useContext(AuthContext);

	// useEffect(() => {
	// 	if(user.logged == true){
	// 		window.location.href = '/';
	// 	}
	// }, [user]);

    return <div>
        <nav className="navbar sticky-top justify-content-right rounded-5 navbar-expand-lg navbar-light swatch_2">
            <div className="container-fluid">
                    <h1 className="navbar-brand ms-5" >Laboratory</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                    { isLogin ?  
                        <button className="btn swatch_6 rounded-pill me-2">Connect Wallet</button> :
                        <FontAwesomeIcon icon={faRightFromBracket} size="lg" className="me-5"/>
                    }
                </div>
            </div>
        </nav>
    </div>
}