import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

export const TitleLine = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const TimelineArea = styled.View`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Boll = styled.View`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.checked ? '#7d40e7' : '#FFF')};
  border-radius: 5px;
  border: 1px #7d40e7;
`;

export const Line = styled.View`
  width: 120px;
  height: 1px;
  background-color: #7d40e7;
`;

export const StatusArea = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Status = styled.Text`
  font-size: 12px;
  width: 80px;
  color: #999999;
  text-align: center;
`;
