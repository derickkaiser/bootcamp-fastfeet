import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  height: 900px;
  background: #7D40E7;
  justify-content: center;
  align-items: center;
`;
export const SignBox = styled.div`
  width: 360px;
  height: 448px;
  background: #FFF;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;
export const Logo = styled.div`
  padding: 60px 50px 40px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 260px;
    height: 44px;
  }
`;

export const SubmitForm = styled(Form)`
  padding-top: 20px;
  display: flex;
  flex-direction: column;

  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    padding: 0 30px;

    span {
      font-weight:bold;
      font-size: 14px;
      line-height: 19px;
      color: #444;
      margin-bottom: 9px;
    }

    input {
      background: #FFF;
      border: 1px solid #DDD;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 12px;
      margin-bottom: 15px;

    }
  }

  a {
    text-decoration: none;
  }

`;

export const ButtonDiv = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

    button {
      &:hover{
        opacity: 0.8;
      }
      background: #7D40E7;
      border-radius: 4px;
      align-items:center;
      justify-content: center;
      align-content: center;
      padding: 13px;
      border: 0;
      outline: 0;
      margin: 0 30px;
      width: 100%;

      font-weight: bold;
      font-size: 16px;
      color: #FFF;
      line-height: 19px;
    }
`;
