import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdBook } from 'react-icons/md';

export default function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string().required('Insira um nome'),
    email: Yup.string()
      .email('Insira um email válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .min(6, 'No mínimo 6 caracteres')
      .required('A senha é obrigatória'),
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <div className="logo">
        <MdBook />
        Agenda Digital
      </div>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu email" />
        <Input name="password" type="password" placeholder="Digite sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
