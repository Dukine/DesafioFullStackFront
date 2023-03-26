import Contacts from "./style";
import ContactCard from "../ContactCard";
import Button from "../Button";
import { ContactContext } from "../../Context/ContactContext";

import { useContext } from "react";
import { ImPlus } from "react-icons/im";

const Contactlist = () => {
  const { contacts, setContactsConfig, contactsConfig } =
    useContext(ContactContext);

  return (
    <Contacts>
      <div>
        <h2>Contatos</h2>
        <Button
          variant
          medium
          onClick={() => {
            setContactsConfig({ ...contactsConfig, option: "Add" });
          }}
        >
          <ImPlus />
        </Button>
      </div>
      <ul>
        {contacts.map((contact) => (
          <ContactCard contact={contact} key={contact.id} />
        ))}
      </ul>
    </Contacts>
  );
};

export default Contactlist;
