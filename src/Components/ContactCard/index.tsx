import StyledContactCard from "./styles";
import { ContactContext } from "../../Context/ContactContext";
import { iContact } from "../../Context/UserContext";
import Button from "../Button";

import { FaTrashAlt, FaCog } from "react-icons/fa";
import { useContext } from "react";

interface iContactCardProps {
  contact: iContact;
}

const ContactCard = ({ contact }: iContactCardProps) => {
  const { setContactsConfig } = useContext(ContactContext);

  const removeContact = (contact: iContact) => {
    setContactsConfig({ option: `Rmv`, contactTarget: contact });
  };

  const patchContact = (contact: iContact) => {
    setContactsConfig({ option: `Cfg`, contactTarget: contact });
  };

  return (
    <StyledContactCard>
      <div className="contact-info">
        <h4>{contact.name}</h4>
        <span>Email: {contact.email}</span>
        <span>Telefone: {contact.phone}</span>
        <span>Adicionado em: {contact.registered_at}</span>
      </div>
      <div className="contact-buttons">
        <Button variant medium onClick={() => removeContact(contact)}>
          <FaTrashAlt />
        </Button>
        <Button variant medium onClick={() => patchContact(contact)}>
          <FaCog />
        </Button>
      </div>
    </StyledContactCard>
  );
};

export default ContactCard;
