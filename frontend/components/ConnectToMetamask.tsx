import {Button, Dialog, DialogContent, DialogTitle, Icon} from '@material-ui/core'
import Image from 'next/image'
import MetaMask from './metamask.svg';
export default function ConnectToMetamask(props: any){
    return (
        <Dialog open={props.open} onClose={props.close}>
            <DialogTitle>Connect To MetaMask</DialogTitle>
            <DialogContent className='d-flex justify-content-center align-items-center'>
                <Button variant='contained' color="primary"> Connect Wallet</Button>
            </DialogContent>
        </Dialog>
    )
}