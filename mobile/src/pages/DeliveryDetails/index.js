import React from 'react';
import {View} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Actions from './Actions';

import {
  Container,
  DeliveryInfo,
  Title,
  TitleText,
  Label,
  LabelText,
  DeliveryStatus,
  DateInfo,
} from './styles';

export default function DeliveryDetails({navigation}) {
  const delivery = navigation.getParam('delivery');

  console.tron.log(delivery);

  return (
    <Container>
      <DeliveryInfo>
        <Title>
          <Icon name="local-shipping" size={24} color="#7D40E7" />
          <TitleText>Informações da entrega</TitleText>
        </Title>
        <Label>DESTINATÁRIO</Label>
        <LabelText>{delivery.recipient.name}</LabelText>
        <Label>ENDEREÇO DE ENTREGA</Label>
        <LabelText>
          {delivery.recipient.street}, {delivery.recipient.number},{' '}
          {delivery.recipient.city} - {delivery.recipient.state},{' '}
          {delivery.recipient.cep}
        </LabelText>
        <Label>NOME DO PRODUTO</Label>
        <LabelText>{delivery.product_name}</LabelText>
      </DeliveryInfo>
      <DeliveryStatus>
        <Title>
          <Icon name="event" size={24} color="#7D40E7" />
          <TitleText>Situação da Entrega</TitleText>
        </Title>
        <Label>STATUS</Label>
        <LabelText>{delivery.status}</LabelText>
        <DateInfo>
          <View>
            <Label>DATA DE RETIRADA</Label>
            <LabelText>{delivery.startFormattedDate}</LabelText>
          </View>
          <View>
            <Label>DATA DE ENTREGA</Label>
            <LabelText>{delivery.endFormattedDate}</LabelText>
          </View>
        </DateInfo>
      </DeliveryStatus>
      <Actions delivery={delivery}/>
    </Container>
  );
}

DeliveryDetails.navigationOptions = ({navigation}) => ({
  headerTitle: () => <Header title="Detalhes da encomenda" border={true} />,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#000" />
    </TouchableOpacity>
  ),
});
