import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';

import { format, parseISO } from 'date-fns';

import DeliveryProblemItem from './DeliveryProblemItem';

import { TopDiv, Table, TableHeader, TableContent, MinimalTableCell, TableCell } from './styles';
import api from '../../services/api';

export default function DeliveryProblem() {
  const [deliveryProblems, setDeliveryProblems] = useState([]);

  useEffect(() => {
    async function loadDeliveryProblems(){
      const response = await api.get('/delivery_problems');

      console.tron.log(response.data);

      setDeliveryProblems(response.data);
    }
    loadDeliveryProblems();
  }, []);

  return (
    <>
      <TopDiv>
        <h1>Problemas na entrega</h1>
      </TopDiv>
      <Table>
        <TableHeader>
          <MinimalTableCell>ENCOMENDA</MinimalTableCell>
          <TableCell>PROBLEMA</TableCell>
          <MinimalTableCell>AÇÕES</MinimalTableCell>
        </TableHeader>
        <TableContent>
          {deliveryProblems.map(dp => (
            <DeliveryProblemItem
              deliveryProblem={dp}
              setDeliveryProblem={setDeliveryProblems}
              deliveryProblems={deliveryProblems}
            />
          ))}          
        </TableContent>
      </Table>
    </>
  );
}
