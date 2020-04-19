import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 64px;
  background: #FFF;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border: 1px solid #DDD;

`;

export const Home = styled.div`
  padding: 0 30px;
  display: flex;
  align-content: center;
  justify-content: center;

  border-right: 1px solid #DDD;
  margin-right: 30px;



  > a {
    text-decoration: none;

    &:hover{
      opacity: 0.6;
    }

    display: flex;
    align-items: flex-start;

    img {
      height: 23px;
      padding-bottom: 2px;
    }

    span {
      padding-top: 4px
      padding-left: 12px;
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      color: #EE4D64;
    }
  }

`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  li{
    padding-right: 20px;

    font-weight: bold;
    font-size: 15px;
    line-height: 18px;

    a {
      &:hover{
        opacity: 0.6;
      }
      color: ${props => (props.active === true ? '#444' : '#999') };
      text-decoration: none;
    }

  }

  li:last-child {
    padding-right: 0;
  }

`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 30px;
  padding-top: 14px;
  padding-bottom: 14px;

  span{
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #666;
    padding-bottom: 4px;
  }

  small {
    font-size: 14px;
    line-height: 16px;

    text-align: right;

    a {
      color: #DE3B3B;
      text-decoration: none;
    }
  }
`;

export const MyNavLink = styled(NavLink)`
  &.active{
    color: #000;
  }
`;
