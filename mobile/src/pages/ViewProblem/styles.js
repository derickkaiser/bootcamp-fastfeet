import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
`;

export const TitleView = styled.View`
  display: flex;
  align-items: center;
`;

export const Problem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px;
  padding: 15px 20px;
  border: 1px solid #0000001a;
  border-radius: 4px;
`;

export const ProblemText = styled.Text`
  font-size: 16px;
  line-height: 21px;
  color: #999;
`;

export const Date = styled.Text`
  font-size: 12px;
  line-height: 16px;
  color: #c1c1c1;
`;

export const NoProblemView = styled.View`
  display: flex;
  margin: 20px;
  align-items: center;
`;

export const NoProblemText = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;