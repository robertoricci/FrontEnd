import React from 'react';
import logo from '~/assets/logo.svg';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
const schema = Yup.object().shape({
  name: Yup.string().required('O nome e obrigatório'),
  email: Yup.string()
    .email('Insiram um e-mail válido')
    .required('O e-amail e obrigátorio'),
  password: Yup.string()
    .min(6, 'A senha minima de 6 caracteres')
    .required('A senha e obrigatoria'),
});

export default function SignUp() {
  function handleSubmit(data) {}
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua Senha" />
        <button type="submit"> Criar Conta</button>
        <Link to="/register">Ja tenho Login</Link>
      </Form>
    </>
  );
}
