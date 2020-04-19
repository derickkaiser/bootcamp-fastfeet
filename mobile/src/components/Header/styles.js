import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StackContainer = styled(Container)`
  border: 1px solid #ddd;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
`;
