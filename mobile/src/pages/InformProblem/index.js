import React, {useState} from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

import api from '../../services/api';

import Header from '../../components/Header';

import {Container, InformProblemText, SubmitButton} from './styles';

export default function InformProblem({navigation}) {
  const deliveryId = navigation.getParam('deliveryId');
  const [problem, setProblem] = useState('');

async function handleSubmit() {
    await api.post(`/delivery/${deliveryId}/problems`, {description: problem});
    navigation.navigate('DeliveryDetails');
  }

  return (
    <Container>
      <InformProblemText
        placeholder="Inclua seu pedido de auxílio"
        multiline={true}
        numberOfLines={10}
        autoCorrect={false}
        value={problem}
        onChangeText={setProblem}
      />

      <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
    </Container>
  );
}

InformProblem.navigationOptions = ({navigation}) => ({
  headerTitle: () => <Header title="Informar problema" border={true} />,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#000" />
    </TouchableOpacity>
  ),
});
