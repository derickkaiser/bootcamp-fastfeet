import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/logo.svg';

import NavigationService from '../../services/navigation';

import Header from '../../components/Header';
import Background from '../../components/Background';

import {
  CheckinRequestButton,
  Container,
  ProfileImage,
  Label,
  TextValue,
} from './styles';

export default function Profile({navigation}) {
  console.tron.log(navigation.getParam('deliveryman'));
  return (
    <>
      <Header />
      <Background>
        <Container>
          <ProfileImage>
            <Image source={logo} />
          </ProfileImage>
          <Label>Nome Completo</Label>
          <TextValue>Gaspar Antunes</TextValue>
          <Label>Email</Label>
          <TextValue>example@rocketseat.com.br</TextValue>
          <Label>Data de cadastro</Label>
          <TextValue>10/01/2020</TextValue>
          <CheckinRequestButton
            color="#E74040"
            onPress={() => NavigationService.navigate('SignIn')}>
            Logout
          </CheckinRequestButton>
        </Container>
      </Background>
    </>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({tintColor}) => (
    <Icon name="account-circle" size={20} color={tintColor} />
  ),
};
