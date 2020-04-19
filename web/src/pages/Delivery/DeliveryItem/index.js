import React from 'react';

import MoreActions from '../../../components/MoreActions';
import Status from '../../../components/Status';

import api from '../../../services/api';

import { editRequest } from '../../../store/modules/delivery/actions';

import { Delivery, Column, MinimalTableCell  } from './styles';

export default function DeliveryItem({delivery, setDeliveries, deliveries}) {
  let status;
  if(delivery.status === "PENDENTE"){
    status = <Status bgColor="#F0F0DF" color="#C1BC35" text="PENDENTE"/>;
  }else if(delivery.status === "RETIRADO"){
    status = <Status bgColor="#BAD2FF" color="#4D85EE" text="RETIRADA"/>;
  }else if(delivery.status === "ENTREGUE"){
    status = <Status bgColor="#DFF0DF" color="#2CA42B" text="ENTREGUE"/>;
  }else if(delivery.status === "CANCELADO"){
    status = <Status bgColor="#FAB0B0" color="#DE3B3B" text="CANCELADA"/>;
  }

  async function handleDelete(id){
    if(window.confirm(`Deseja remover a encomenda de id ${id}?`)){
        await api.delete(`/deliveries/${id}`);
        const deliveriesList = deliveries.filter(d => d.id !== id);

        setDeliveries(deliveriesList);
    }
  }

  return (
    <Delivery key={delivery.id}>
        <MinimalTableCell>{delivery.id}</MinimalTableCell>
        <Column>{delivery.recipient.name}</Column>
        <Column>
          <img
            src={delivery.deliveryman.avatar.url
                || "https://api.adorable.io/avatars/285/abott@adorable.png"}
            alt={delivery.deliveryman.avatar.path} />
          {delivery.deliveryman.name}
        </Column>
        <Column>{delivery.recipient.city}</Column>
        <Column>{delivery.recipient.state}</Column>
        <Column>{status}</Column>
        <MinimalTableCell>
            <MoreActions toggleView={true} object={delivery} handleDelete={handleDelete} editRequest={editRequest}/>
        </MinimalTableCell>
    </Delivery>
  );
}
