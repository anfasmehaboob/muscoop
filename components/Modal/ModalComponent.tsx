import Modal from "react-modal";

interface Props {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: JSX.Element;
}

export default function ModalComponent({
  modalIsOpen,
  setIsOpen,
  children,
}: Props) {
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

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <button onClick={closeModal}>close</button>

        {children}
      </Modal>
    </div>
  );
}
