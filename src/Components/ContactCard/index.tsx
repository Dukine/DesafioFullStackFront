import StyledContactCard from "./styles";
import { ContactContext } from "../../Context/ContactContext";
import { iContact } from "../../Context/UserContext";

import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";

interface iContactCardProps {
  contact: iContact;
}

const ContactCard = ({ contact }: iContactCardProps) => {
  const { setContactsConfig } = useContext(ContactContext);

  const removeContact = (contact: iContact) => {
    setContactsConfig({ option: `Rmv`, contactTarget: contact });
  };

  return (
    <StyledContactCard>
      <div className="contact-info">
        <h4>{contact.name}</h4>
        <span>Email: {contact.email}</span>
        <span>Telefone: {contact.phone}</span>
        <span>Adicionado em: {contact.registered_at}</span>
      </div>
      <FaTrashAlt onClick={() => removeContact(contact)} />
    </StyledContactCard>
  );
};

export default ContactCard;
