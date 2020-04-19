import styled from 'styled-components/native';

import Button from '../../components/Button';

export const CheckinRequestButton = styled(Button)`
  margin-top: 15px;
`;

export const Container = styled.View`
  flex: 1;
  margin: 35px;
`;

export const ProfileImage = styled.View`
  width: 135px;
  height: 135px;
`;

export const Label = styled.Text`
  color: #666;
  font-size: 12px;
`;

export const TextValue = styled.Text`
  color: #444;
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: bold;
`;

export const EmptyCheckIn = styled.Text`
  font-size: 30px;
  line-height: 26px;
`;

export const CheckinList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 20},
})``;

export const CheckIn = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const CheckInCounter = styled.Text`
  padding: 15px 20px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #444;
`;

export const CheckInDate = styled.Text`
  padding: 15px 20px;
  font-size: 14px;
  line-height: 16px;

  color: #666;
`;
