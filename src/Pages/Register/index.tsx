import Form from "../../Components/Form";
import Button from "../../Components/Button";
import Input from "../../Components/InputText";
import Header from "../../Components/Header";
import StyledLink from "../../Components/Link";
import { StyledRegister } from "./styles";
import { UserContext } from "../../Context/UserContext";
import { RegisterSchema } from "../../Validators";
import { iRegisterUserInfo } from "../../Context/UserContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUserInfo>({ resolver: yupResolver(RegisterSchema) });

  const { registerUser } = useContext(UserContext);

  return (
    <>
      <Header></Header>
      <StyledRegister>
        <h3>Cadastro</h3>
        <Form onSubmit={handleSubmit(registerUser)}>
          <div>
            <label htmlFor="username">Nome de usuario:</label>
            <Input
              placeholder="Username..."
              type="text"
              {...register(`username`)}
            />
            <span>{errors.username?.message}</span>
          </div>

          <div>
            <label htmlFor="password">Senha:</label>
            <Input
              placeholder="Senha..."
              type="password"
              {...register(`password`)}
            />
            <span>{errors.password?.message}</span>
          </div>

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
            <Input
              placeholder="Telefone..."
              type="text"
              {...register(`phone`)}
            />
            <span>{errors.phone?.message}</span>
          </div>

          <Button>Registrar</Button>
        </Form>
        <p>Já tem uma conta?</p>
        <StyledLink to={`/login`}>Login</StyledLink>
      </StyledRegister>
    </>
  );
};

export default Register;
