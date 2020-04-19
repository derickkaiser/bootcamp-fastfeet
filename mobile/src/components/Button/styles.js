import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  padding: 13px 0;
  background: ${props => (props.color ? props.color : '#7D40E7')};
  border-radius: 4px;
  align-self: stretch;
`;

export const Text = styled.Text`
  font-weight: bold;
  align-self: center;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
`;
