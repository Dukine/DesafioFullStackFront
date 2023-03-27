import Button from "../Button";
import Input from "../InputText";
import Form from "../Form";
import { ContactContext } from "../../Context/ContactContext";
import { CfgContactSchema } from "../../Validators";
import { iAddContactInfo } from "../../Context/ContactContext";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ImCross } from "react-icons/im";

interface iModalCfgContactProps {
  setIsLeaving(confirm: boolean): void;
}

interface iFormValues {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
}

const ModalCfgContact = ({ setIsLeaving }: iModalCfgContactProps) => {
  const { cfgContact, contactsConfig, setContactsConfig } =
    useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormValues>({ resolver: yupResolver(CfgContactSchema) });

  return (
    <div className="content">
      <div>
        <h4>Atualizar Contato</h4>
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
      <Form
        onSubmit={handleSubmit((info) => {
          setIsLeaving(true);
          setTimeout(() => {
            cfgContact(info as iAddContactInfo);
          }, 1000);
        })}
      >
        <div>
          <label htmlFor="first_name">Primeiro nome:</label>
          <Input
            placeholder="Primeiro nome..."
            type="text"
            {...register(`first_name`)}
          />
          <span>{errors.first_name?.message}</span>
        </div>

        <div>
          <label htmlFor="last_name">Sobrenome:</label>
          <Input
            placeholder="Sobrenome..."
            type="text"
            {...register(`last_name`)}
          />
          <span>{errors.last_name?.message}</span>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Input placeholder="Email..." type="email" {...register(`email`)} />
          <span>{errors.email?.message}</span>
        </div>

        <div>
          <label htmlFor="phone">Telefone:</label>
          <Input placeholder="Telefone..." type="text" {...register(`phone`)} />
          <span>{errors.phone?.message}</span>
        </div>
        <Button>Atualizar Contato</Button>
      </Form>
    </div>
  );
};

export default ModalCfgContact;
