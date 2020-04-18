import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 140px;
  left: calc(90% - 50px);
  top: calc(35%);
  display: ${props => (props.isVisible ? 'display' : 'none')};

  background: #FFF;
  padding: 16px 0;
  box-shadow: 0px 0px 2px #00000026;
  border-radius: 4px;

  >div:last-child {
    border: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  a{
    text-decoration: none;
    color: #999999;
  }
`;

export const ActionItem = styled.div`
  display: flex;
  justify-content: baseline;

  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 6px;

  padding-bottom: 6px;

  border-bottom: 1px solid #EEEEEE;
`;

export const ActionText = styled.span`
  padding-left: 11px;
`;