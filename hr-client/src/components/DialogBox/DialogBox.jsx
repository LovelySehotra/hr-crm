import React, { useRef } from "react";
import "./DialogBox.css";
import Typography from "../Typography/Typography";

const DialogBox = ({ isOpen, onClose, children }) => {
    const dialogRef = useRef(null);
    const handleOverlayClick = (e) => {
        if (dialogRef.current && !dialogRef.current.contains(e.target)) {
            onClose();
        }
    };

    return (
        <div className={`dialog-overlay ${isOpen ? "visible" : ""}`} onClick={handleOverlayClick}>
            <dialog ref={dialogRef} className="dialog" open={isOpen}>
                <div className="dialogBoxLabel">
                    <Typography type="subHeading">Add New Candidate</Typography>
                    <button className="dialog-close" onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className="dialogBoxContent">   
                {children}
                </div>
            </dialog>
        </div>
    );
};

export default DialogBox;
