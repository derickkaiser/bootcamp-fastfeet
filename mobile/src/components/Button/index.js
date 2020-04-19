import React from 'react';

import {Container, Text} from './styles';

export default function Button({children, color, ...rest}) {
  return (
    <Container color={color} {...rest}>
      <Text>{children}</Text>
    </Container>
  );
}
