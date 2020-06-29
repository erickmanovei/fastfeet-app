import React, { useEffect, useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { signOut } from '~/store/modules/auth/actions';
import api from '~/services/api';
import Initials from '~/components/Initials';
import DeliveryItem from '~/components/DeliveryItem';

import {
  Container,
  Header,
  Profile,
  HeaderInfo,
  Welcome,
  UserName,
  TitleArea,
  Title,
  FiltersArea,
  FilterText,
  Body,
  ListItem,
} from './styles';

// eslint-disable-next-line react/prop-types
const Delivery = ({ navigation }) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.auth.deliveryman.name);
  const deliverymanId = useSelector((state) => state.auth.deliveryman.id);
  const [deliveries, setDeliveries] = useState([]);
  const [error, setError] = useState('');
  const [pendingButtonColor, setPendingButtonColor] = useState('#7D40E7');
  const [deliveredButtonColor, setDeliveredButtonColor] = useState('#999999');

  const listDeliveries = async (delivered) => {
    try {
      if (delivered) {
        setPendingButtonColor('#999999');
        setDeliveredButtonColor('#7D40E7');
      } else {
        setPendingButtonColor('#7D40E7');
        setDeliveredButtonColor('#999999');
      }
      const { data } = await api.get(
        `/deliveryman/${deliverymanId}/deliveries`,
        {
          params: {
            delivered,
          },
        }
      );
      setDeliveries(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    listDeliveries(false);
  }, []);

  const handleLogout = () => {
    dispatch(signOut());
  };

  const handleDetails = (deliveryId) => {
    // eslint-disable-next-line react/prop-types
    navigation.navigate('Details', {
      deliveryId,
    });
  };

  return (
    <Container>
      <Header>
        <Profile>
          <Initials name={name} size="80" />
          <HeaderInfo>
            <Welcome>
              Bem vindo de volta,
              {error}
            </Welcome>
            <UserName>{name}</UserName>
          </HeaderInfo>
        </Profile>
        <RectButton onPress={handleLogout}>
          <Icon name="exit-to-app" color="#FF0000" size={30} />
        </RectButton>
      </Header>
      <TitleArea>
        <Title>Entregas</Title>
        <FiltersArea>
          <RectButton onPress={() => listDeliveries(false)}>
            <FilterText color={pendingButtonColor}>Pendentes</FilterText>
          </RectButton>

          <RectButton onPress={() => listDeliveries(true)}>
            <FilterText color={deliveredButtonColor}>Entregues</FilterText>
          </RectButton>
        </FiltersArea>
      </TitleArea>
      <Body>
        <ListItem
          data={deliveries}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <DeliveryItem detailsaction={handleDetails} delivery={item} />
          )}
        />
      </Body>
    </Container>
  );
};

export default Delivery;
