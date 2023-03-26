import Form from "../../Components/Form";
import Button from "../../Components/Button";
import Input from "../../Components/InputText";
import Header from "../../Components/Header";
import StyledLink from "../../Components/Link";
import { StyledLogin } from "./styles";
import { UserContext } from "../../Context/UserContext";
import { LoginSchema } from "../../Validators";
import { iLoginUserInfo } from "../../Context/UserContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginUserInfo>({ resolver: yupResolver(LoginSchema) });

  const { loginUser } = useContext(UserContext);

  return (
    <>
      <Header />
      <StyledLogin>
        <h3>Login</h3>
        <Form onSubmit={handleSubmit(loginUser)}>
          <div>
            <label htmlFor="username">Username:</label>
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

          <Button>Entrar</Button>
        </Form>
        <p>Ainda não tem uma conta?</p>
        <StyledLink to={`/register`}>Cadastre-se</StyledLink>
      </StyledLogin>
    </>
  );
};

export default Login;
