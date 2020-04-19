import React from 'react';
import {Text, View} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';

import NavigationService from '../../services/navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Title,
  TitleLabel,
  Header,
  DeliveryStatusBar,
  ViewTest,
  SecondViewTest,
  StatusDot,
  DeliveryInfo,
  Info,
  Label,
  MoreDetails,
} from './styles';

export default function DeliveryItem({delivery}) {

  return (
    <Container>
      <Content>
        <Header>
          <Title>
            <Icon name="local-shipping" size={24} color="#7D40E7" />
            <TitleLabel>{delivery.product_name}</TitleLabel>
          </Title>
        </Header>
        <View>
          <DeliveryStatusBar/>
          <ViewTest>
            <SecondViewTest>
              <StatusDot filled={true}/>
              <Text>Aguardando</Text>
            </SecondViewTest>
            <SecondViewTest>
              <StatusDot filled={(delivery.status === 'RETIRADO' || delivery.status === 'ENTREGUE') ? true : false  }/>
              <Text>Retirada</Text>
            </SecondViewTest>
            <SecondViewTest>
              <StatusDot filled={delivery.status === 'ENTREGUE' ? true : false  }/>
              <Text>Entregue</Text>
            </SecondViewTest>
          </ViewTest>
        </View>
        <DeliveryInfo>
          <Info>
            <Text>Data</Text>
            <Label>{delivery.createdFormattedDate}</Label>
          </Info>
          <Info>
            <Text>Cidade</Text>
            <Label>{delivery.recipient.city}</Label>
          </Info>
          <TouchableOpacity
            onPress={() =>
              NavigationService.navigate('DeliveryDetails', {delivery})
            }>
            <MoreDetails>Ver detalhes</MoreDetails>
          </TouchableOpacity>
        </DeliveryInfo>
      </Content>
    </Container>
  );
}
