import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import Davatar from '@davatar/react';
import { userInfo } from "os";

export default function Navbar(props: any) {
    const { user, login, logout } = useContext(AuthContext);

	// useEffect(() => {
	// 	if(user.logged == true){
	// 		window.location.href = '/';
	// 	}
	// }, [user]);

    return <div>
        {/* {user.logged && */}
        <nav className="navbar sticky-top justify-content-right rounded-5 navbar-expand-lg navbar-light swatch_2">
            <div className="container-fluid">
                    <h1 className="navbar-brand ms-5" >Laboratary</h1>
                <div className="justify-content-end ">
                     
                <span className="me-2 text-bold">
                    
                    {`${user.user.name} ${user.user.address.slice(0,5)}...`}
                </span>
                
                <FontAwesomeIcon icon={faRightFromBracket} type="button" onClick={logout} className="ms-3 me-5"/>
                </div>
            </div>
        </nav>
        {/* } */}
    </div>
}