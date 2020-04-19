import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled.View`
  margin: 20px;
`;

export const DeliveryList = styled.FlatList`
  margin-bottom: 100px;
`;

export const MyProfile = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ProfileImage = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
`;

export const ProfileInfo = styled.View`
  display: flex;
  width: 300px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const WelcomeText = styled.View`
  margin: 12px;
`;

export const LabelValue = styled.Text`
  color: #444;
  font-size: 22px;
  font-weight: bold;
`;

export const HeaderList = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 22px;
  margin-bottom: 10px;
`;
export const DeliverFilter = styled.View`
  display: flex;
  flex-direction: row;
`;

export const DeliverFilterPending = styled.Text`
  color: ${props => (props.isPending ? '#7D40E7' : '#999')};
  text-decoration: ${props => (props.isPending ? 'underline' : 'none')};
  text-decoration-color: ${props => (props.isPending ? '#7D40E7' : '#999')};
  font-weight: bold;
  font-size: 15px;
  margin-right: 15px;
`;

export const DeliverFilterDelivered = styled.Text`
  color: ${props => (props.isPending ? '#999' : '#7D40E7')};
  text-decoration: ${props => (props.isPending ? 'none' : 'underline')};
  text-decoration-color: ${props => (props.isPending ? '#999' : '#7D40E7')};
  font-weight: bold;
  font-size: 15px;
`;

export const EmptyDeliveries = styled.View`
  display: flex;
  margin: 20px;
  align-items: center;
`;

export const EmptyDeliveriesText = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;