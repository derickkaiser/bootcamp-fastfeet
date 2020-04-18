import React from 'react';
import { useDispatch } from 'react-redux';
import {Input} from '@rocketseat/unform';

import { Container, SignBox, Logo,SubmitForm, ButtonDiv } from './styles';

import { loginRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/fastfeet-logo.png';

export default function Main() {
  const dispatch = useDispatch();

  function handleSubmit({email, password}){
    dispatch(loginRequest(email, password));
  }

  return (
    <Container>
      <SignBox>
        <Logo>
          <img src={logo} alt="Logo"/>
        </Logo>
        <SubmitForm onSubmit={handleSubmit}>
          <div>
            <span>SEU E-MAIL</span>
            <Input
              name="email"
              type="email"
              placeholder="exemplo@email.com"
            />
          </div>

          <div>
            <span>SUA SENHA</span>
            <Input
              name="password"
              type="password"
              placeholder="Insira sua senha"
            />
          </div>

          <ButtonDiv>
            <button type="submit">
              Entrar no sistema
            </button>
          </ButtonDiv>
        </SubmitForm>
      </SignBox>
    </Container>
  );
}