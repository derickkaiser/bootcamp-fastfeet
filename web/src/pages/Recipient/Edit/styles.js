import styled from 'styled-components';

export const TopDiv = styled.div`
  padding: 30px 270px;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 24px;
    line-height: 28px;
    color: #444;
  }
`;

export const Actions = styled.div`

  display: flex;

  a {
    text-decoration: none;
  }

  button {
    border-radius: 4px;
    padding: 10px 15px;
    margin-left: 16px;

    outline: 0;
    border: 0;

    display: flex;

    font-weight: bold;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;

    svg {
      margin-right: 5px;
    }
    
  }

  input {
    background: #FFF;
    border: 1px solid #DDD;
    border-radius: 4px;
    padding-left: 30px;
    height: 100%;
    width: 240px;
  }
`;

export const SubmitButton = styled.button`
  background: #7D40E7;
`;
export const BackButton = styled.button`
  background: #CCC;
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  margin: 0 270px;
  padding-bottom: 30px;

  button{
    background: #EE4D64;
    border-radius: 4px;
    padding: 10px 20px;
    margin-top: 10px;

    outline: 0;
    border: 0;

    font-weight: bold;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    
  }
`;

export const SubmitForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;

  label{
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #444;


    margin-top: 20px;
  }

  input {
    padding: 13px 0 13px 15px;
    margin-top: 8px;
    border-radius: 4px;
    border: 1px solid #DDD;

    font-size: 16px;
    line-height: 19px;
    color: #999;
  }

`;

export const MultiInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  
  >div {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-right: 16px;

    input {
      font-size: 16px;
      line-height: 19px;
      color: #999999;
    }
  }

  div:last-child {
      padding-right: 0;
  }
`;