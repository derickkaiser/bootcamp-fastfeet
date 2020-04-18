import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdCheck } from 'react-icons/md';

import cepApi from '../../../services/cepApi';

import { useSelector, useDispatch } from 'react-redux';

import { createRequest, editSuccess } from '../../../store/modules/recipient/actions';

import { Container, TopDiv, Actions, SubmitForm, MultiInputDiv, SubmitButton, BackButton } from './styles';

export default function Edit({isEdit}) {
  const recipient = {
    id: null,
    name: null,
    cep: null,
    street: null,
    number: null,
    city: null,
    state: null,
    complement: null
  };
  const r = useSelector(state => state.recipient.recipient);
  if(isEdit && r){
    recipient.id = r.id;
    recipient.name = r.name;
    recipient.cep = r.cep;
    recipient.street = r.street;
    recipient.number = r.number;
    recipient.city = r.city;
    recipient.state = r.state;
    recipient.complement = r.complement;
  }
  console.tron.log(recipient);
  const [name, setName] = useState(recipient.name);
  const [cep, setCep] = useState(recipient.cep);
  const [street, setStreet] = useState(recipient.street);
  const [number, setNumber] = useState(recipient.number);
  const [city, setCity] = useState(recipient.city);
  const [state, setState] = useState(recipient.state);
  const [complement, setComplement] = useState(recipient.complement);
  const [recipientId, setRecipientId] = useState(recipient.id);


  //01001000/json/

  const dispatch = useDispatch();

  function handleSubmit(){
    console.tron.log(isEdit);
    const newRecipient = {
      id: recipientId,
      name,
      cep,
      street,
      city,
      state,
      number,
      complement,
    };
    if(isEdit){
      dispatch(editSuccess(newRecipient));
    }else{
      dispatch(createRequest(newRecipient));
    }
  }

  async function handleChangeCep(cep){
    if(cep.length === 8){
      const response = await cepApi.get(`/${cep}/json/`);
      if(response.statusText === "OK"){
        setCity(response.data.localidade);
        setState(response.data.uf);
        setStreet(response.data.logradouro);
      }
    }
    setCep(cep);
  }

  return (
    <>
      <TopDiv>
        <h1>{isEdit ? 'Edição de destinatários' : 'Cadastro de destinatários'}</h1>
        <Actions>
          <Link to="/recipients">
            <BackButton type="button">
              <MdArrowBack size={16} color="#FFF" />
              VOLTAR
            </BackButton>
          </Link>
          <Link>
            <SubmitButton onClick={() => handleSubmit()}>
              <MdCheck size={16} color="#FFF" />
              SALVAR
            </SubmitButton>
          </Link>
        </Actions>
      </TopDiv>
      <Container>
        <SubmitForm>
          <label htmlFor="">NOME</label>
          <input
              name="name"
              type="text"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              placeholder="Digite o nome do destinatário"
          />
          <MultiInputDiv>
            <div>
              <label htmlFor="">CEP</label>
              <input
                name="name"
                type="text"
                value={cep}
                onChange={(e)=> handleChangeCep(e.target.value)}
                placeholder="Digite o CEP"
              />
            </div>
            <div>
              <label htmlFor="">CIDADE</label>
              <input
                name="city"
                type="text"
                disabled
                value={city}
              />
            </div>
            <div>
              <label htmlFor="">ESTADO</label>
              <input
                name="state"
                type="text"
                disabled
                value={state}
              />
            </div>
          </MultiInputDiv>
          <MultiInputDiv>
            <div>
              <label htmlFor="">RUA</label>
              <input
                name="street"
                type="text"
                disabled
                value={street}
              />
            </div>
            <div>
              <label htmlFor="">NÚMERO</label>
              <input
                name="number"
                type="text"
                value={number}
                onChange={(e)=> setNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">COMPLEMENTO</label>
              <input
                name="complement"
                type="text"
                value={complement}
                onChange={(e)=> setComplement(e.target.value)}
              />
            </div>
              
          </MultiInputDiv>
        </SubmitForm>
      </Container>
    </>
  );
}
