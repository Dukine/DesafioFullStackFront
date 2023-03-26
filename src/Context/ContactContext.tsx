import { UserContext } from "./UserContext";
import { Api } from "../Services/Api";
import { iContact } from "./UserContext";

import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { toast } from "react-toastify";
import axios from "axios";

interface iProviderProps {
  children: ReactNode;
}

interface iContactConfig {
  option: string | null;
  contactTarget: iContact;
}

export interface iAddContactInfo {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
}

interface iContactContext {
  contacts: iContact[];
  addContact(info: iAddContactInfo): Promise<void>;
  deleteContact(): Promise<void>;
  contactsConfig: iContactConfig;
  setContactsConfig(contactConfig: iContactConfig): void;
}

export const ContactContext = createContext<iContactContext>(
  {} as iContactContext
);

const ContactProvider = ({ children }: iProviderProps) => {
  const [contacts, setContacts] = useState<iContact[]>([] as iContact[]);
  const [contactsConfig, setContactsConfig] = useState<iContactConfig>({
    option: null,
    contactTarget: {} as iContact,
  });
  const { user } = useContext(UserContext);

  const addContact = async (info: iAddContactInfo) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const { data } = await Api.post<iContact>("contact/", info, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Novo contato adicionado!`);
      setContacts([...contacts, data]);
    } catch (err) {
      axios.isAxiosError(err)
        ? toast.error(`${err.response?.data.detail}`)
        : console.error(err);
    }
    setContactsConfig({ ...contactsConfig, option: null });
  };

  const deleteContact = async () => {
    const token = localStorage.getItem("@TOKEN");
    try {
      console.log(contactsConfig.contactTarget.id);
      await Api.delete(`contact/${contactsConfig.contactTarget.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Contato deletado!`);
      setContacts(
        contacts.filter(
          (contact) => contact.id !== contactsConfig.contactTarget.id
        )
      );
    } catch (err) {
      axios.isAxiosError(err)
        ? toast.error(`${err.response?.data.detail}`)
        : console.error(err);
      console.log(err);
    }
    setContactsConfig({ ...contactsConfig, option: null });
  };

  useEffect(() => {
    user ? setContacts(user.contacts) : setContacts([]);
    setContactsConfig({ option: null, contactTarget: {} as iContact });
  }, [user]);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        addContact,
        deleteContact,
        contactsConfig,
        setContactsConfig,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
