import React from 'react';
import { Link } from 'react-router-dom';

import { MdBook } from 'react-icons/md';

export default function SignUp() {
  return (
    <>
      <div className="logo">
        <MdBook />
        Agenda Digital
      </div>
      <form>
        <input placeholder="Nome completo" />
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
