import React from 'react';

import { Wrapper } from './styles';

import Header from '../../../components/Header';

export default function DefaultLayout({children, ...props}) {
  return (
    <>
      <Header {...props} />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
}
