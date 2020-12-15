import * as React from "react";
import Modal from "react-modal";
import Rating from "../Rating/Rating";

export default function RateProvider({visible, data, handleClick}) {
    return (
        <Modal
            isOpen={visible}
            contentLabel="Rate"
            overlayClassName="custom-modal-overlay"
        >
            <Rating rating={data}/>
            <button className="btn btn-primary"
                    onclick={handleClick}>
                Submit
            </button>
        </Modal>
    )
}