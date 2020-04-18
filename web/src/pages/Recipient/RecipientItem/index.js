import React from 'react';

import MoreActions from '../../../components/MoreActions';

import api from '../../../services/api';

import { editRequest } from '../../../store/modules/recipient/actions';

import { Delivery, Column, MinimalTableCell  } from './styles';

export default function RecipientItem({recipient, setRecipients, recipients}) {

  async function handleDelete(id){
    if(window.confirm(`Deseja remover o destinatário de id ${id}?`)){
        await api.delete(`/recipients/${id}`);
        const recipientsList = recipients.filter(d => d.id !== id);

        setRecipients(recipientsList);
    }
  }

  return (
    <Delivery key={recipient.id}>
        <MinimalTableCell>{recipient.id}</MinimalTableCell>
        <Column>{recipient.name}</Column>
        <Column>{recipient.street + ', ' + recipient.number + ', ' + recipient.city + ' - ' + recipient.state}</Column>
        <MinimalTableCell>
            <MoreActions object={recipient} handleDelete={handleDelete} editRequest={editRequest}/>
        </MinimalTableCell>
    </Delivery>
  );
}
