import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutRequest } from '../../store/modules/auth/actions';
import { Container, Home, Menu, MenuList, Profile, MyNavLink } from './styles';

import logo from '../../assets/fastfeet-logo.png';

export default function Header() {

  const dispatch = useDispatch();

  function handleLogout(){
    dispatch(logoutRequest());
  }

  return (
    <Container>
      <Menu>
        <Home>
          <Link to="/">
            <img src={logo} alt="Logo"/>
          </Link>
        </Home>
        <MenuList>
          <li>
            <MyNavLink to="/deliveries">ENCOMENDAS</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/deliverymen">ENTREGADORES</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/recipients">DESTINATÁRIOS</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/delivery-problems">PROBLEMAS</MyNavLink>
          </li>
        </MenuList>
      </Menu>
      <Profile>
        <span>Diego Fernandes</span>
        <small><Link to="/" onClick={handleLogout}>sair</Link></small>
        
      </Profile>
    </Container>
  );
}