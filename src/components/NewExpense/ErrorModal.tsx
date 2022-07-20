import React, { useRef } from "react";
import './ErrorModal.css';


export const ErrorModal = ({ setShowErrorModal, error }: any) => {
    const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const closeModal = (e: any) => {
        if (e.target === modalRef.current) {
            setShowErrorModal(false);
        }
    };
    return (
        <div id="portal_error">
            <div className="container" ref={modalRef} onClick={closeModal}>
                <div className="modal">
                    <button className="modal-close-btn" onClick={() => setShowErrorModal(false)}>X</button>
                    <div className="modal-body">
                        {error}
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={() => setShowErrorModal(false)}>OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
//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