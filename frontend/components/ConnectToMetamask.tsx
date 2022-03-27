import {Button, Dialog, DialogContent, DialogTitle, Icon} from '@material-ui/core'
import Image from 'next/image'
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import MetaMask from './metamask.svg';
export default function ConnectToMetamask(props: any){
    const {user, login} = useContext(AuthContext);
    return (
        <Dialog open={props.open} onClose={props.close}>
            <DialogTitle>Connect To MetaMask</DialogTitle>
            <DialogContent className='d-flex justify-content-center align-items-center'>
                <Button variant='contained' color="primary" onClick={login}> Connect Wallet</Button>
            </DialogContent>
        </Dialog>
    )
}