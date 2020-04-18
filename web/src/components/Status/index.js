import React from 'react';

import { Container } from './styles';

export default function Status({bgColor, color, text}) {
  return (
    <Container bgColor={bgColor} textColor={color}>
        <div></div>
        <strong>{text}</strong>
    </Container>
  );
}
