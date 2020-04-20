import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';

import { format, parseISO } from 'date-fns';

import RecipientItem from './RecipientItem';

import EmptyList from '../../components/EmptyList';

import { TopDiv, Actions, Table, TableHeader, TableContent, MinimalTableCell, TableCell } from './styles';
import api from '../../services/api';

export default function Recipient() {
  const [recipients, setRecipients] = useState([]);

  async function handleOnChange(e){
    const name = e.target.value;

    console.tron.log(name);

    const response = await api.get(`/recipients?name=${name}`);

    setRecipients(response.data);
  }

  useEffect(() => {
    async function loadRecipients(){
      const response = await api.get('/recipients');

      setRecipients(response.data);
    }
    loadRecipients();
  }, []);

  return (
    <>
      <TopDiv>
        <h1>Gerenciando destinatários</h1>

        <Actions>
          <div>
            <MdSearch size={16} />
            <input
              type="text"
              onChange={(e) => handleOnChange(e)}
              placeholder="Buscar destinatários"
            />
          </div>
          <Link to="/recipients/create">
            <button>
              <MdAdd size={16} color="#FFF" />
              CADASTRAR
            </button>
          </Link>
        </Actions>
      </TopDiv>
      {recipients.length === 0 ? (<EmptyList/>) : (<Table>
        <TableHeader>
          <MinimalTableCell>ID</MinimalTableCell>
          <TableCell>NOME</TableCell>
          <TableCell>ENDEREÇO</TableCell>
          <MinimalTableCell>Ações</MinimalTableCell>
        </TableHeader>
        <TableContent>
          {recipients.map(recipient => (
            <RecipientItem
              recipient={recipient}
              setRecipients={setRecipients}
              recipients={recipients}
            />
          ))}
        </TableContent>
      </Table>)}

    </>
  );
}
