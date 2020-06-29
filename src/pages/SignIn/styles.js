import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Background = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background-color: #7d40e7;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled.TextInput`
  background-color: #fff;
  height: 45px;
  padding: 0 20px;
  font-size: 16px;
  margin-bottom: 20px;
  border-radius: 4px;
`;
