import { Image } from 'react-native';
import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.View`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  background: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const Text = styled.Text`
  font-size: ${(props) => props.size / 2}px;
  color: ${(props) => darken(0.5, props.color)};
`;

export const Img = styled(Image)`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: 50%;
`;
