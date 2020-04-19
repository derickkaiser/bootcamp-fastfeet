import React, {useState, useRef} from 'react';
import {Image, Alert} from 'react-native';
import NavigationService from '../../services/navigation';
import api from '../../services/api';

import logo from '../../assets/logo.svg';

import {Container, LogoView, Form, FormInput, SubmitButton} from './styles';

export default function SignIn() {
  const passwordRef = useRef();
  const [deliverymanId, setDeliverymanId] = useState('');

  async function handleSubmit() {
    const {data} = await api.get('/deliverymen');

    const deliveryman = data.find(d => d.id == deliverymanId);

    if(!deliveryman){
      Alert.alert('Não existe entregador cadastrado com este id.');
      return;
    }

    NavigationService.navigate('Dashboard', {deliveryman});
  }

  return (
    <Container>
      <LogoView>
        <Image source={logo} />
      </LogoView>
      <Form>
        <FormInput
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={deliverymanId}
          onChangeText={setDeliverymanId}
        />

        <SubmitButton color="#82BF18" onPress={handleSubmit}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
