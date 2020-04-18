import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdCheck } from 'react-icons/md';

import Select from 'react-select';

import api from '../../../services/api';

import AvatarInput from '../AvatarInput';

import { useSelector, useDispatch } from 'react-redux';

import { createRequest, editSuccess } from '../../../store/modules/deliveryman/actions';

import { Container, TopDiv, Actions, SubmitForm, LastRowDiv, SubmitButton, BackButton } from './styles';

export default function Edit({isEdit}) {
  const deliveryman = {
    id: null,
    name: null,
    email: null,
    fileId: null,
    preview: null,
  }
  const dm = useSelector(state => state.deliveryman.deliveryman);
  if(isEdit && dm){
    deliveryman.id = dm.id;
    deliveryman.name = dm.name;
    deliveryman.email = dm.email;
    deliveryman.fileId = dm.avatar_id;
    deliveryman.preview = dm.avatar.url;
  }

  const [preview, setPreview] = useState(deliveryman.preview);
  const [file, setFile] = useState(deliveryman.fileId);
  const [name, setName] = useState(deliveryman.name);
  const [email, setEmail] = useState(deliveryman.email);
  const [id, setId] = useState(deliveryman.id);

  const dispatch = useDispatch();

  function handleSubmit(){
    console.tron.log(isEdit);
    const newDeliveryman = {
      id,
      name,
      email,
      avatar_id: file,
    };
    if(isEdit){
      dispatch(editSuccess(newDeliveryman));
    }else{
      dispatch(createRequest(newDeliveryman));
    }
  }

  async function handleChange(e){
    const data = new FormData();

    data.append('file', e.target.files[0]);
    
    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <>
      <TopDiv>
        <h1>{isEdit ? 'Edição de entregadores' : 'Cadastro de entregadores'}</h1>
        <Actions>
          <Link to="/deliverymen">
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
          <AvatarInput
            name="avatar_id"
            file={file}
            preview={preview}
            handleChange={handleChange}
          />
          <label htmlFor="">NOME</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder="Digite o nome do entregador"
          />
          <label htmlFor="">E-MAIL</label>
          <input
            name="email"
            type="text"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="Digite o email do entregador"
          />
        </SubmitForm>
      </Container>
    </>
  );
}
