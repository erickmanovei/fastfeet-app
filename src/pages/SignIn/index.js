import React, { useState } from 'react';
import { Image, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '~/components/Button';
import { Background, Container, Form, FormInput } from './styles';

import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

const SignIn = () => {
  const dispatch = useDispatch();

  const [deliverymanId, setDeliverymanId] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = () => {
    dispatch(signInRequest(deliverymanId));
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Background>
        <Container>
          <Image source={logo} />
          <Form>
            <FormInput
              keyboardType="number-pad"
              placeholder="Informe seu ID de cadastro"
              value={deliverymanId}
              onChangeText={setDeliverymanId}
            />
            <Button
              loading={loading}
              background="#82BF18"
              onPress={handleSubmit}
            >
              Entrar no sistema
            </Button>
          </Form>
        </Container>
      </Background>
    </>
  );
};

export default SignIn;
