import React from 'react';
import logo from '../../assets/logo.svg';

import {Container, StackContainer, Text} from './styles';

export default function Header({title, border}) {
  return (
    <>
      {border ? (
        <Container>
          <Text>{title}</Text>
        </Container>
      ) : (
        <StackContainer>
          <Text>{title}</Text>
        </StackContainer>
      )}
    </>
  );
}
