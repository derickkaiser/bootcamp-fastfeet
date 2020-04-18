import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';

import { format, parseISO } from 'date-fns';

import DeliverymanItem from './DeliverymanItem';

import { TopDiv, Actions, Table, TableHeader, TableContent, MinimalTableCell, TableCell } from './styles';
import api from '../../services/api';

export default function Delivery() {
  const [deliverymen, setDeliverymen] = useState([]);

  async function handleOnChange(e){
    const name = e.target.value;

    const response = await api.get(`/deliverymen?name=${name}`);

    setDeliverymen(response.data);
  }

  useEffect(() => {
    async function loadDeliverymen(){
      const response = await api.get('/deliverymen');

      setDeliverymen(response.data);
    }
    loadDeliverymen();
  }, []);

  return (
    <>
      <TopDiv>
        <h1>Gerenciando entregadores</h1>

        <Actions>
          <div>
            <MdSearch size={16} />
            <input 
              type="text"
              onChange={(e) => handleOnChange(e)}
              placeholder="Buscar por entregadores"
            />
          </div>
          <Link to="/deliverymen/create">
            <button>
              <MdAdd size={16} color="#FFF" />
              CADASTRAR
            </button>
          </Link>
        </Actions>
      </TopDiv>
      <Table>
        <TableHeader>
          <MinimalTableCell>ID</MinimalTableCell>
          <MinimalTableCell>FOTO</MinimalTableCell>
          <TableCell>NOME</TableCell>
          <TableCell>EMAIL</TableCell>
          <MinimalTableCell>AÇÕES</MinimalTableCell>
        </TableHeader>
        <TableContent>
          {deliverymen.map(deliveryman => (
            <DeliverymanItem
            deliveryman={deliveryman}
              setDeliverymen={setDeliverymen}
              deliverymen={deliverymen}
            />
          ))}          
        </TableContent>
      </Table>
    </>
  );
}
