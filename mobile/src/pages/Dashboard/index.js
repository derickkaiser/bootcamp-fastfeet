import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {parseISO, format} from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {withNavigationFocus} from 'react-navigation';

import NavigationService from '../../services/navigation';

import Header from '../../components/Header';
import Background from '../../components/Background';
import DeliveryItem from '../../components/DeliveryItem';

import api from '../../services/api';

import {
  Container,
  MyProfile,
  ProfileImage,
  ProfileInfo,
  LabelValue,
  WelcomeText,
  HeaderList,
  DeliverFilter,
  DeliverFilterPending,
  DeliverFilterDelivered,
  DeliveryList,
  EmptyDeliveries,
  EmptyDeliveriesText,
} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Dashboard({navigation, isFocused}) {
  const [isPending, setIsPending] = useState(true);
  const [deliveries, setDeliveries] = useState([]);

  let deliveryman;

  if (navigation.getParam('deliveryman')) {
    deliveryman = navigation.getParam('deliveryman');
  }

  useEffect(() => {
    async function loadDeliveries() {
      let deliveriesList;
      if (isPending) {
        const {data} = await api.get(
          `/deliveryman/${deliveryman.id}/deliveries`,
        );
        deliveriesList = data;
      } else {
        const {data} = await api.get(
          `/deliveryman/${deliveryman.id}/delivered_deliveries`,
        );
        deliveriesList = data;
      }

      setDeliveries(
        deliveriesList.map(d => ({
          ...d,
          createdFormattedDate: d.createdAt
            ? format(parseISO(d.createdAt), 'dd/MM/yyyy')
            : '--/--/----',
          endFormattedDate: d.end_date
            ? format(parseISO(d.end_date), 'dd/MM/yyyy')
            : '--/--/----',
          canceledFormattedDate: d.canceled_at
            ? format(parseISO(d.canceled_at), 'dd/MM/yyyy')
            : '--/--/----',
          startFormattedDate: d.start_date
            ? format(parseISO(d.start_date), 'dd/MM/yyyy')
            : '--/--/----',
        })),
      );
    }
    if (isFocused) {
      loadDeliveries();
    }
  }, [isPending, isFocused]); //eslint-disable-line

  return (
    <>
      <Header />
      <Background>
        <Container>
          <MyProfile>
            <ProfileImage source={{ uri: deliveryman.avatar.url}} />
            <ProfileInfo>
              <WelcomeText>
                <Text>Bem-vindo de volta,</Text>
                <LabelValue>{deliveryman.name}</LabelValue>
              </WelcomeText>
              <TouchableOpacity
                onPress={() => NavigationService.navigate('SignIn')}>
                <Icon name="exit-to-app" size={20} color="#E74040" />
              </TouchableOpacity>
            </ProfileInfo>
          </MyProfile>
          <HeaderList>
            <LabelValue>Entregas</LabelValue>
            <DeliverFilter>
              <TouchableOpacity onPress={() => setIsPending(true)}>
                <DeliverFilterPending isPending={isPending}>
                  Pendentes
                </DeliverFilterPending>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsPending(false)}>
                <DeliverFilterDelivered isPending={isPending}>
                  Entregues
                </DeliverFilterDelivered>
              </TouchableOpacity>
            </DeliverFilter>
          </HeaderList>
          {deliveries.length === 0 ? 
          (
            <EmptyDeliveries>
              <EmptyDeliveriesText>Não existem entregas para este filtro.</EmptyDeliveriesText>
            </EmptyDeliveries>) : 
          (<DeliveryList
            data={deliveries}
            keyExtractor={item => String(item.id)}
            initialNumToRender={50}
            renderItem={({item}) => <DeliveryItem delivery={item} />}
          />)}
          
        </Container>
      </Background>
    </>
  );
}

Dashboard.navigationOptions = {
  headerShown: false,
};

export default withNavigationFocus(Dashboard);
