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

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ListItem = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  width: '90%',
})``;

export const BodyContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #999999;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: #c1c1c1;
`;
