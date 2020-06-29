import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

export const Container = styled.View`
  height: 200px;
  width: 100%;
  border-radius: 7px;
  background: #f8f9fd;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
`;
export const Header = styled.View`
  height: 125px;
  width: 98%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background: #fff;
  margin-top: 2px;
  display: flex;
`;

export const TitleLine = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  color: #7d40e7;
`;

export const Footer = styled.View`
  height: 75px;
  width: 98%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoArea = styled.View`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoTitle = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
`;
export const InfoText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
`;
export const DetailsButton = styled(RectButton)`
  padding: 20px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const DetailsText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #7d40e7;
`;
