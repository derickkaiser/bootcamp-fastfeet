import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';

import { format, parseISO } from 'date-fns';

import DeliveryItem from './DeliveryItem';

import { TopDiv, Actions, Table, TableHeader, TableContent, MinimalTableCell, TableCell } from './styles';
import api from '../../services/api';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);

  async function handleOnChange(e){
    const productName = e.target.value;

    const response = await api.get(`/deliveries?name=${productName}`);

    setDeliveries(response.data);
  }

  useEffect(() => {
    async function loadDeliveries(){
      const response = await api.get('/deliveries');

      
      const deliveriesList = response.data.map(d => ({
        ...d,
        formattedCanceledDate: d.canceled_at && format(parseISO(d.canceled_at), 'dd/MM/yyyy'),
        formattedStartDate: d.start_date && format(parseISO(d.start_date), 'dd/MM/yyyy'),
        formattedEndDate: d.end_date && format(parseISO(d.end_date), 'dd/MM/yyyy')
      }))

      setDeliveries(deliveriesList);
    }
    loadDeliveries();
  }, []);

  return (
    <>
      <TopDiv>
        <h1>Gerenciando encomendas</h1>

        <Actions>
          <div>
            <MdSearch size={16} />
            <input 
              type="text"
              onChange={(e) => handleOnChange(e)}
              placeholder="Buscar encomendas"
            />
          </div>
          <Link to="/deliveries/create">
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
          <TableCell>Destinatário</TableCell>
          <TableCell>Entregador</TableCell>
          <TableCell>Cidade</TableCell>
          <TableCell>Estado</TableCell>
          <TableCell>Status</TableCell>
          <MinimalTableCell>Ações</MinimalTableCell>
        </TableHeader>
        <TableContent>
          {deliveries.map(delivery => (
            <DeliveryItem
              delivery={delivery}
              setDeliveries={setDeliveries}
              deliveries={deliveries}
            />
          ))}          
        </TableContent>
      </Table>
    </>
  );
}
