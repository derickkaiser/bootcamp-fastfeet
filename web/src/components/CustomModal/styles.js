import styled from 'styled-components';

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;

  button {
    border-radius: 4px;
    padding: 10px 30px;
    margin-top: 30px;

    outline: 0;
    border: 0;

    display: flex;
    align-self: center;

    font-weight: bold;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;

    background: #CCC;

  }

  strong {
    font-size: 14px;
    color: #444;
    line-height: 19px;
  }

  span {
    font-size: 16px;
    color: #666666;
    line-height: 26px;
  }
`;

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-bottom: 12px;
  padding-bottom: 9px;
  border-bottom: 1px solid #EEEEEE;

  strong {
    color: #444444;
    padding-bottom: 4px;
  }

  span {
    color: #666666;
  }
`;

export const DeliveryDate = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 12px;
  padding-bottom: 9px;
  border-bottom: 1px solid #EEEEEE;

  strong {
    color: #444444;
    padding-bottom: 4px;
  }

  span {
    color: #666666;
  }
`;

export const RecipientSignature = styled.div`
  display: flex;
  flex-direction: column;

  img {
    display: flex;
    align-self: center;

    padding-top: 23px;
    height: 36px;
    width: 234px;
  }
`;