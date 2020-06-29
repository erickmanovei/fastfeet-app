import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import Delivery from '~/pages/Delivery';
import DeliveryDetails from '~/pages/DeliveryDetails';
import Profile from '~/pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Delivery') {
            iconName = focused ? 'reorder' : 'reorder';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account-circle' : 'account-circle';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#7D40E7',
        inactiveTintColor: 'gray',
        fontSize: 40,
        style: { fontSize: '40px' },
      }}
    >
      <Tab.Screen
        name="Delivery"
        component={Delivery}
        options={{
          title: 'Entregas',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Meu Perfil' }}
      />
    </Tab.Navigator>
  );
}

export default () => {
  const signed = useSelector((state) => state.auth.signed);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signed ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="Details"
          component={DeliveryDetails}
          options={{
            title: 'Detalhes da encomenda',
            headerTintColor: '#FFF',
            headerStyle: { backgroundColor: '#7D40E7' },
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
