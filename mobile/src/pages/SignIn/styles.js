import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background: #7d40e7;
`;

export const LogoView = styled.View`
  align-items: center;
`;

export const LogoText = styled.Text`
  color: #ee4d64;
  font-weight: bold;
  font-size: 23px;
  line-height: 28px;
`;

export const Form = styled.View`
  margin: 0 25px;
`;

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(60, 60, 60, 1)',
})`
  padding: 13px 0 13px 20px;
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
`;

export const SubmitButton = styled(Button)`
  color: #82bf18;
  margin-top: 15px;
`;
