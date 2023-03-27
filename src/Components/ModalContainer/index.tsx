import { Modal } from "./styles";
import ModalAddContact from "../ModalAddContact";
import ModalRemoveContact from "../ModalRemoveContact";
import ModalCfgContact from "../ModalCfgContact";
import { ContactContext } from "../../Context/ContactContext";

import { useContext, useEffect, useState } from "react";

const ModalContainer = () => {
  const { contactsConfig } = useContext(ContactContext);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => setIsLeaving(false), [contactsConfig]);

  switch (contactsConfig.option) {
    case "Add":
      return (
        <Modal isLeaving={isLeaving}>
          <ModalAddContact setIsLeaving={setIsLeaving} />
        </Modal>
      );

    case "Rmv":
      return (
        <Modal isLeaving={isLeaving}>
          <ModalRemoveContact setIsLeaving={setIsLeaving} />
        </Modal>
      );

    case "Cfg":
      return (
        <Modal isLeaving={isLeaving}>
          <ModalCfgContact setIsLeaving={setIsLeaving} />
        </Modal>
      );

    default:
      return null;
  }
};

export default ModalContainer;
