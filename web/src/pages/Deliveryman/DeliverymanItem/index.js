import React from 'react';

import MoreActions from '../../../components/MoreActions';
import Status from '../../../components/Status';

import api from '../../../services/api';

import { editRequest } from '../../../store/modules/deliveryman/actions';

import { Delivery, Column, MinimalTableCell  } from './styles';

export default function DeliveryItem({deliveryman, setDeliverymen, deliverymen}) {
  async function handleDelete(id){
    if(window.confirm(`Deseja remover o entregador de id ${id}?`)){
        await api.delete(`/deliverymen/${id}`);
        const deliverymenList = deliverymen.filter(d => d.id !== id);

        setDeliverymen(deliverymenList);
    }
  }

  return (
    <Delivery key={deliveryman.id}>
        <MinimalTableCell>{deliveryman.id}</MinimalTableCell>
        <MinimalTableCell>
          {deliveryman.avatar_id && 
                <img src={ deliveryman.avatar.url 
                      || 'https://api.adorable.io/avatars/285/abott@adorable.png'} width="32" height="32" />}
        </MinimalTableCell>
        <Column>{deliveryman.name}</Column>
        <Column>{deliveryman.email}</Column>
        <MinimalTableCell>
            <MoreActions object={deliveryman} handleDelete={handleDelete} editRequest={editRequest}/>
        </MinimalTableCell>
    </Delivery>
  );
}
