import React from 'react';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

import NavigationService from './services/navigation';

import Routes from './routes';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#FFF" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </>
  );
}
