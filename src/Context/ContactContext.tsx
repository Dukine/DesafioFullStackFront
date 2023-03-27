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
  cfgContact(info: iAddContactInfo): Promise<void>;
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

  const getContact = async () => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const { data } = await Api.get<iContact[]>("contact/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts([...data]);
    } catch (err) {
      axios.isAxiosError(err)
        ? toast.error(`${err.response?.data.detail}`)
        : console.error(err);
    }
  };

  const addContact = async (info: iAddContactInfo) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      await Api.post<iContact>("contact/", info, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Novo contato adicionado!`);
      getContact();
    } catch (err) {
      axios.isAxiosError(err)
        ? toast.error(`${err.response?.data.detail}`)
        : console.error(err);
    }

    setContactsConfig({ ...contactsConfig, option: null });
  };

  const cfgContact = async (info: iAddContactInfo) => {
    const token = localStorage.getItem("@TOKEN");

    let x: keyof iAddContactInfo;
    for (x in info) {
      if (!info[x]) {
        delete info[x];
      }
    }

    try {
      await Api.patch<iContact>(
        `contact/${contactsConfig.contactTarget.id}/`,
        info,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success(`Contato atualizado!`);
      getContact();
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
      await Api.delete(`contact/${contactsConfig.contactTarget.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`Contato deletado!`);
      getContact();
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
        cfgContact,
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
