import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdCheck } from 'react-icons/md';

import Select from 'react-select';

import api from '../../../services/api';

import { useSelector, useDispatch } from 'react-redux';

import { createRequest, editSuccess } from '../../../store/modules/delivery/actions';

import { Container, TopDiv, Actions, SubmitForm, LastRowDiv, SubmitButton, BackButton } from './styles';

export default function Edit({isEdit}) {
  const delivery = {
    id: null,
    deliveryman: null,
    recipient: null,
    product_name: null,
  }
  const d = useSelector(state => state.delivery.delivery);
  if(isEdit && d){
    delivery.id = d.id;
    delivery.deliveryman = {value: d.deliveryman.id, label: d.deliveryman.name};
    delivery.recipient = {value: d.recipient.id, label: d.recipient.name};
    delivery.product_name = d.product_name;
  }
  const [recipients, setRecipients] = useState([]);
  const [deliverymen, setDeliverymen] = useState([]);
  const [productName, setProductName] = useState(delivery.product_name);
  const [deliveryId, ] = useState(delivery.id);
  const [selectedRecipient, setSelectedRecipient] = useState(delivery.recipient);
  const [selectedDeliveryman, setSelectedDeliveryman] = useState(delivery.deliveryman);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadRecipients(){
      const {data} = await api.get('/recipients');
      
      const recipientsList = data.map(r => ({
        value: r.id,
        label: r.name,
      }))

      setRecipients(recipientsList);
    }
    async function loadDeliverymen(){
      const { data } = await api.get('/deliverymen');

      const deliverymenList = data.map(d => ({
        value: d.id,
        label: d.name,
      }));

      setDeliverymen(deliverymenList);
    }
    loadRecipients();
    loadDeliverymen();
  }, []);

  function handleSubmit(){
    console.tron.log(isEdit);
    const newDelivery = {
      id: deliveryId,
      recipient_id: selectedRecipient.value,
      deliveryman_id: selectedDeliveryman.value,
      product_name: productName,
    };
    if(isEdit){
      dispatch(editSuccess(newDelivery));
    }else{
      dispatch(createRequest(newDelivery));
    }
  }

  return (
    <>
      <TopDiv>
        <h1>{isEdit ? 'Edição de encomendas' : 'Cadastro de encomendas'}</h1>
        <Actions>
          <Link to="/deliveries">
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
          <LastRowDiv>
            <div>
              <label htmlFor="">DESTINATÁRIO</label>
              <Select
                value={selectedRecipient}
                options={recipients}
                onChange={setSelectedRecipient}
                placeholder="Escolha um destinatário"
              />
            </div>
            <div>
              <label htmlFor="">ENTREGADOR</label>
              <Select
                value={selectedDeliveryman}
                options={deliverymen}
                onChange={setSelectedDeliveryman}
                placeholder="Escolha um entregador"
              />
            </div>
          </LastRowDiv>
          <label htmlFor="">NOME DO PRODUTO</label>
          <input
            name="name"
            type="text"
            value={productName}
            onChange={(e)=> setProductName(e.target.value)}
            placeholder="Digite o nome do produto"
          />
        </SubmitForm>
      </Container>
    </>
  );
}
