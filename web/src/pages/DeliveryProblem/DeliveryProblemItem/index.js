import React from 'react';

import MoreActions from '../../../components/MoreActions';

import api from '../../../services/api';

import { Delivery, Column, MinimalTableCell  } from './styles';

export default function DeliveryProblemItem({deliveryProblem, setDeliveryProblem, deliveryProblems}) {

  async function handleDelete(id){
    if(window.confirm(`Deseja cancelar a encomenda?`)){
        await api.delete(`/problem/${id}/cancel-delivery`);
        const dpList = deliveryProblems.filter(d => d.id !== id);

        setDeliveryProblem(dpList);
    }
  }

  return (
    <Delivery key={deliveryProblem.id}>
        <MinimalTableCell>{deliveryProblem.delivery_id}</MinimalTableCell>
        <Column>{ deliveryProblem.description.length > 100 ? deliveryProblem.description.substring(0, 100).concat('...') : deliveryProblem.description}</Column>
        <MinimalTableCell>
            <MoreActions
              object={deliveryProblem}
              handleDelete={handleDelete}
              hideEdit={true}
              toggleView={true}/>
        </MinimalTableCell>
    </Delivery>
  );
}
