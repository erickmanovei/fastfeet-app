import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const Header = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: auto;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const HeaderInfo = styled.SafeAreaView``;

export const Welcome = styled.Text`
  font-size: 12px;
  color: #666666;
`;
export const UserName = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #444444;
`;

export const TitleArea = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #444444;
`;

export const FiltersArea = styled.View`
  flex-direction: row;
`;

export const FilterText = styled.Text`
  font-size: 14px;
  margin-left: 10px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

export const Body = styled.View`
  margin-top: 20px;
`;

export const ListItem = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30, paddingBottom: 200 },
})``;
