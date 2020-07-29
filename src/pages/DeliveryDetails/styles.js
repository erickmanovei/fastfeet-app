import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const HeaderBackground = styled.View`
  background: #7d40e7;
  height: 150px;
  width: 100%;
  position: absolute;
  z-index: -1;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: #999999;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #666666;
  margin-top: 8px;
`;

export const LineSpace = styled.View`
  width: 1;
  height: 25px;
`;

export const LeftButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  background: #f8f9fd;
  margin: 1px;
`;
export const CenterButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: #f8f9fd;
  margin: 1px;
`;
export const RightButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: #f8f9fd;
  margin: 1px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #999999;
  margin-top: 5px;
  text-align: center;
`;
