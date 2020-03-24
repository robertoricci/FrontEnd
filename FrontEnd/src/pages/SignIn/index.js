import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '~/assets/logo.svg';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insiram um e-mail válido')
    .required('O e-amail e obrigátorio'),
  password: Yup.string().required('A senha e obrigatoria'),
});
export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua Senha" />
        <button type="submit"> Acessar</button>
        <Link to="/register">Criar conta gratuida</Link>
      </Form>
    </>
  );
}
