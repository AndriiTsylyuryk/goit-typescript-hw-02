import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    maxWidth: "80vw",
    maxHeight: "80vh",
    overflow: "auto",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, photo }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Photo Details"
    >
      <div>
        {photo && (
          <>
            <img src={photo.urls.full} alt={photo.alt_description} />
            <p>{photo.description || "No description available"}</p>
          </>
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
