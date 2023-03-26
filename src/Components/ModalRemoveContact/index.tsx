import Button from "../Button";
import { ContactContext } from "../../Context/ContactContext";

import { useContext } from "react";
import { ImCross } from "react-icons/im";

interface iModalRemoveContactProps {
  setIsLeaving(confirm: boolean): void;
}

const ModalRemoveContact = ({ setIsLeaving }: iModalRemoveContactProps) => {
  const { deleteContact, setContactsConfig, contactsConfig } =
    useContext(ContactContext);

  return (
    <div className="content">
      <div>
        <h4>Deletar Contato</h4>
        <Button
          variant
          medium
          onClick={() => {
            setIsLeaving(true);
            setTimeout(() => {
              setContactsConfig({ ...contactsConfig, option: null });
            }, 1000);
          }}
        >
          <ImCross />
        </Button>
      </div>
      <div>
        <p>
          Você tem certeza que deseja deletar{" "}
          {contactsConfig.contactTarget?.name}?
        </p>
      </div>
      <div className="options">
        <Button
          medium
          onClick={() => {
            setIsLeaving(true);
            setTimeout(() => {
              deleteContact();
            }, 1000);
          }}
        >
          Sim
        </Button>
        <Button
          variant
          medium
          onClick={() => {
            setIsLeaving(true);
            setTimeout(() => {
              setContactsConfig({ ...contactsConfig, option: null });
            }, 1000);
          }}
        >
          Não
        </Button>
      </div>
    </div>
  );
};

export default ModalRemoveContact;
