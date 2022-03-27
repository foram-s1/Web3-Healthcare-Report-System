import { faHouseChimneyMedical, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Button, Dialog, DialogContent, DialogTitle, Icon} from '@material-ui/core'
import Image from 'next/image'
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import MetaMask from './metamask.svg';

export default function LoginComponent(props: any){
    const {user, login} = useContext(AuthContext);

    return (
        <div className='container-fluid vh-100 d-flex align-items-center overflow-hidden'>
            <div className="container bg-light w-75 h-50 p-5 border rounded-3">
                <div className="m-auto mb-3" style={{"width":"13%" }}>
                    <FontAwesomeIcon icon={faHouseChimneyMedical } size="1x" className="swatch_7b"/>
                </div>
                <h3 className="fnt fw-bold swatch_6 mb-4">Welcome to <br/> Secure Report System</h3>
                <p className='text-wrap fs-6'>The most trusted way to acess and store your Medical Reports, Diagnose and Analysis.</p>
                <div className='d-flex justify-content-center align-items-center'>
                    <Button variant='contained' className='btn rounded-pill swatch_6b' onClick={login}> 
                        <div className='' >
                            {/* place image in the button on the left side */}
                            <Image src="/assets/metamask.svg" className='me-1' width={35} height={30} />
                        </div>
                        <div className='fnt fw-bold text-white'>
                            Connect Wallet
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}