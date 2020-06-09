import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#0FF' }}>
      <Button title="Go to Signup" onPress={() => navigation.push('SignUp')}>
        Signup
      </Button>
    </View>
  );
};

export default SignIn;
