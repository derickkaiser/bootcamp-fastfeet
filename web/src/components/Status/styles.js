import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 120px;

  background: ${props => (props.bgColor) ? props.bgColor : '#FFF'};
  border-radius: 12px;

  div {
    margin: 6px;
    margin-left: 8px;
    padding: 5px;

    border-radius: 50%;
    background: ${props => (props.textColor) ? props.textColor : '#FFF'};
  }

  strong {
    margin: 3px 7px 3px 3px;
    color: ${props => (props.textColor) ? props.textColor : '#FFF'};
  }
`;
