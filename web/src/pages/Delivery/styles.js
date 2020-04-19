import styled from 'styled-components';

export const TopDiv = styled.div`
  padding: 30px 120px;
  display: flex;
  flex-direction: column;

  h1 {
    padding-bottom: 34px;

    font-size: 24px;
    line-height: 28px;
    color: #444;
  }
`;

export const Actions = styled.div`

  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  button {
    background: #7D40E7;
    border-radius: 4px;
    padding: 10px 15px;
    margin-right: 16px;

    outline: 0;
    border: 0;

    display: flex;

    font-weight: bold;
    font-size: 14px;
    color: #FFFFFF;

    &:hover{
      opacity: 0.6;
    }

    svg {
      margin-right: 5px;
    }

  }

  div {
    svg {
      margin-top: 10px;
      margin-left: 10px;
      position: absolute;
    }

    input {
      background: #FFF;
      border: 1px solid #DDD;
      border-radius: 4px;

      padding-left: 30px;
      padding-right: 60px;

      height: 100%;
    }
  }

`;

export const Table = styled.div`
  margin: 0 120px;

  border-radius: 4px;

  display: flex;
  flex-direction: column;
`;

export const TableHeader = styled.div`
  display: flex;
  margin-bottom: 14px;
  padding: 20px 0;

  div {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #444;
  }
`;

export const TableContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MinimalTableCell = styled.div`
  display: flex;
  width: 80px;
  justify-content: center;
`;

export const TableCell = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`;
