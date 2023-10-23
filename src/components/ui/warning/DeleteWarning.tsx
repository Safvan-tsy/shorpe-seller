import { Alert } from '@mui/material';
import { Modal } from 'react-responsive-modal';
import './warning.css'

const DeleteWarning = ({ isOpen, onClose, productName, onConfirm }) => {
    return (
        <Modal open={isOpen} onClose={onClose} center>
            <div className='delete-warning'>
                <Alert severity="warning">Are you sure you want to delete `{productName}`?</Alert>
                <div>
                    <button className="icon-btn" onClick={onClose}>No</button>
                    <button className="icon-btn" onClick={onConfirm}>Yes</button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteWarning