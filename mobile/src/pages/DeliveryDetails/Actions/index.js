import React from 'react';
import {Alert} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import NavigationService from '../../../services/navigation';
import api from '../../../services/api';

import { Container, InformProblem, ViewProblems, ConfirmDelivery, LabelText } from './styles';

export default function Actions({delivery}) {

  function alertMsg(id){
    Alert.alert(
      "Confirmação de ação",
      "Deseja confirmar a retirada da entrega?",
      [
        { text: "Sim", onPress: 
          async () => {
            try{
              await api.put(`/delivery/${id}/withdraw_delivery`);
            }catch(err){
              console.tron.log(err);
              Alert.alert('Já foram retiradas mais de 5 entregas nas últimas 24 horas.');
            }
          } 
        },
        {
          text: "Não",
          onPress: () => {},
          style: "cancel"
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <Container>
      {delivery.status === 'PENDENTE' && (<TouchableOpacity
          onPress={() => alertMsg(delivery.id)}>
          <InformProblem>
            <Icon name="present-to-all" size={24} color="#E7BA40" />
            <LabelText>Retirar Entrega</LabelText>
          </InformProblem>
        </TouchableOpacity>)}
        {(delivery.status === 'RETIRADO' || delivery.status === 'ENTREGUE') && 
        (<TouchableOpacity
          onPress={() => NavigationService.navigate('ViewProblem', {delivery})}>
          <ViewProblems>
            <Icon name="info-outline" size={24} color="#E7BA40" />
            <LabelText>Visualizar problema</LabelText>
          </ViewProblems>
        </TouchableOpacity>)}
        {delivery.status === 'RETIRADO' && 
        (<>
          <TouchableOpacity
          onPress={() =>
            NavigationService.navigate('InformProblem', {
              deliveryId: delivery.id,
            })
          }>
          <InformProblem>
            <Icon name="highlight-off" size={24} color="#E74040" />
            <LabelText>Informar problema</LabelText>
          </InformProblem>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              NavigationService.navigate('ConfirmDelivery', {delivery})
            }>
            <ConfirmDelivery>
              <Icon name="check-circle" size={24} color="#7D49E7" />
              <LabelText>Confirmar Entrega</LabelText>
            </ConfirmDelivery>
          </TouchableOpacity>
        </>)}
      </Container>
  );
}
