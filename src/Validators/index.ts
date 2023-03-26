import * as yup from "yup";

export const LoginSchema = yup.object({
  username: yup.string().required(`Username obrigatório`),
  password: yup.string().required(`Senha obrigatória`),
});

export const RegisterSchema = yup.object({
  username: yup.string().required(`Nome de usuário obrigatório`),
  first_name: yup.string().required(`Primeiro nome obrigatório`).max(127),
  last_name: yup.string().required(`Sobrenome obrigatório`).max(127),
  password: yup
    .string()
    .required(`Senha obrigatória`)
    .min(8, `A senha deve ter pelo menos 8 caracters`)
    .matches(/[A-Z]/, `Deve conter uma maiuscula`)
    .matches(/([a-z])/, `Deve conter uma miniscula`)
    .matches(/(\d)/, `Deve conter um número`)
    .matches(/(\W)|_/, `Deve conter um caracter especial`),
  email: yup
    .string()
    .email(`Insira um email válido`)
    .required(`Email obrigatório`),
  phone: yup.string().required(`Telefone obrigatório`).max(10),
});

export const AddContactSchema = yup.object({
  first_name: yup.string().required(`Primeiro nome obrigatório`).max(127),
  last_name: yup.string().required(`Sobrenome obrigatório`).max(127),
  email: yup
    .string()
    .email(`Insira um email válido`)
    .required(`Email obrigatório`),
  phone: yup.string().required(`Telefone obrigatório`).max(10),
});
