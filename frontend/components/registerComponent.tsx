import { faHouseChimneyMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dialog, DialogContent, DialogTitle, MenuItem, Select, TextField } from "@material-ui/core";
import { useState } from "react";

export default function RegisterForm(props: any) {
	const [isLogin, setIsLogin] = useState(false);
    const [userDetails,setUserDetails] = useState({
        name: "",
        type:  "patient"
    })
    let handleRegister = (e:any) => {
        e.preventDefault();
    }

    return (
        <div className="container-fluid vh-100 d-flex align-items-center overflow-hidden">
            <div className="container bg-light w-75 h-75 p-5 border rounded-3">
                <div className="m-auto mb-3" style={{"width":"13%" }}>
                    <FontAwesomeIcon icon={faHouseChimneyMedical } size="1x" className="swatch_7b"/>
                </div>
                    <h3 className="fnt fw-bold swatch_6 mb-4">Welcome to <br/> Secure Report System</h3>
                    <form onSubmit={handleRegister} className="d-flex flex-column">
                        <div className="row my-2">
                            <div className="col-md-4 col-12 fw-bold mb-2">
                                User Address:
                            </div>
                            <div className="col-md-8 col-12">
                                0x0000000000000000000000000
                            </div>
                        </div>
                        <TextField
                            value={userDetails.name}
                            onChange={(e) => setUserDetails({...userDetails,name: e.target.value})}
                            label="Name"
                            className="mb-3"
                        />
                        <Select
                            value={userDetails.type}
                            onChange={(e) => setUserDetails({...userDetails, type: e.target.value})}
                            className="my-3"
                            label="Role"
                            inputProps={{
                                native:true
                            }}
                        >
                            <MenuItem value={"patient"}>Patient</MenuItem>
                            <MenuItem value={"laboratary"}>Laboratary</MenuItem>
                            <MenuItem value={"hospital"}>Hospital</MenuItem>
                        </Select>
                        <div className="px-2 mt-1 mb-3">
                            <Button type={'submit'} className="text-center my-2 swatch_6b text-white rounded-pill" variant="contained"> Register </Button>                    
                        </div>
                    </form>
                <div>
                    <a onClick={() => setIsLogin(!isLogin)}>
						{isLogin ? "Get Registered" : "Back to Connect Wallet?"}
					</a>
                </div>
            </div>
        </div>
    )
}