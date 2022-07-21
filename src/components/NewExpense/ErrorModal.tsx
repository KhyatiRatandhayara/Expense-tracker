import React, { useRef } from "react";
import  ReactDOM  from "react-dom";
import './ErrorModal.css';

//two component in one file
const ErrorPopup = ({ setShowErrorModal, error }: any) => {
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
                <button onClick={() => setShowErrorModal(false)}>OK</button>
            </div>
        </div>
    </div>
</div>
    );
}

export const ErrorModal = ({ setShowErrorModal, error }: any) => {
/**
 *
 * Other people have answered that you should add a null-check, but Typescript also has a non-null assertion that you can use when you are sure that the value is never null by adding the ! operator to the end of your statement
 */
    return (
        // fragment tag to wrap child data
        <>   
        { ReactDOM.createPortal(<ErrorPopup setShowErrorModal={setShowErrorModal} error={error} />, document.getElementById('modal_root')!) }
        </>
    );
}
//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