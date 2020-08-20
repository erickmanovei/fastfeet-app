import styled from 'styled-components';

export const Container = styled.View`
  height: auto;
  width: 100%;
  border-radius: 7px;
  background: #f8f9fd;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
`;
export const Header = styled.View`
  height: auto;
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

export const Body = styled.View`
  height: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 10px;
  width: 98%;
  display: flex;
  flex-direction: column;
  background: #fff;
`;
