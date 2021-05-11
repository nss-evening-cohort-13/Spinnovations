import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import { DeleteAccountProps } from '../../Helpers/Interfaces/UserInterfaces';

const DeleteAccountModal = ({user} : DeleteAccountProps): JSX.Element => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="style-button bg-scheme-red" onClick={toggle}>Delete Account</button>
        <Modal isOpen={modal} toggle={toggle}>
            <div className="delete-account-modal d-flex justify-content-center">
                <div className="p-4">
                    <h3 className="d-flex text-align-center">Are you sure you want to close your account?</h3>
                    <p className="text-align-center">Any Spinnovations you have added will also be removed.</p>
                    <button className="btn btn-danger form-button form-button-text mt-1 mb-1">
                    Yes, close my account.
                    </button>
                </div>
            </div>
        </Modal>
    </div>
  );
}

export default DeleteAccountModal;
