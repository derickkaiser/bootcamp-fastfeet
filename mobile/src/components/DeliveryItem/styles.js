import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0 20px 30px 20px;
  border: 1px solid #0000001a;
  border-radius: 4px;
`;

export const Content = styled.View``;
export const Title = styled.View`
  margin: 12px 0 26px 15px;
  display: flex;
  flex-direction: row;
`;
export const TitleLabel = styled.Text`
  font-size: 15px;
  margin-left: 10px;
  color: #7d40e7;
  font-weight: bold;
`;
export const DeliveryStatusBar = styled.View`
  position: absolute;
  margin-left: 55px;
  top: 5px;
  width: 70%;
  border-bottom-width: 1px;
  border-bottom-color: #7d40e7;
`;

export const ViewTest = styled.View`
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SecondViewTest = styled.View`
  align-items: center;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StatusDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: ${props => (props.filled ? '#7d40e7' : '#fff')};
  border: 1px solid #7d40e7;
  border-radius: 5px;
  padding-top: 10px;

  margin-bottom: 5px;

`;

export const DeliveryInfo = styled.View`
  background: #f7f9fd;
  padding: 20px;
  margin-top: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.View``;
export const Label = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #444;
`;
export const MoreDetails = styled.Text`
  font-size: 15px;
  color: #7d40e7;
  font-weight: bold;
`;
