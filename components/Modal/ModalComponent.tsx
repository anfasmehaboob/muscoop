import Modal from "react-modal";
import styles from "./Modal.module.scss";

interface Props {
  modalIsOpen: boolean;
  children?: JSX.Element;
}

export default function ModalComponent({ modalIsOpen, children }: Props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      boxShadow: "-1px 5px 30px rgba(0, 0, 0, 0.13)",
      borderRadius: "20px",
      border: "0px",
      padding: "40px",
    },
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        className={styles.Modal}
        overlayClassName={styles.Overlay}
      >
        {children}
      </Modal>
    </div>
  );
}
