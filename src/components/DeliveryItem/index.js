import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import Timeline from '~/components/Timeline';

import {
  Container,
  Header,
  TitleLine,
  Title,
  Footer,
  InfoArea,
  InfoTitle,
  InfoText,
  DetailsButton,
  DetailsText,
} from './styles';

const getDate = (delivery) => {
  if (delivery.canceled_at) {
    return format(new Date(delivery.canceled_at), 'd/MM/Y');
  }
  if (!delivery.start_date) {
    return format(new Date(delivery.created_at), 'd/MM/Y');
  }
  if (!delivery.end_date) {
    return format(new Date(delivery.start_date), 'd/MM/Y');
  }
  return format(new Date(delivery.end_date), 'd/MM/Y');
};

const DeliveryItem = ({ detailsaction, delivery }) => {
  return (
    <Container>
      <Header>
        <TitleLine deluvery={delivery}>
          <Icon name="local-shipping" size={20} color="#7D40E7" />
          <Title>
            Encomenda
            {String(' ')}
            {delivery.id}
          </Title>
        </TitleLine>
        <Timeline delivery={delivery} />
      </Header>
      <Footer>
        <InfoArea>
          <InfoTitle>Data</InfoTitle>
          <InfoText>{getDate(delivery)}</InfoText>
        </InfoArea>
        <InfoArea>
          <InfoTitle>Cidade</InfoTitle>
          <InfoText>{delivery.recipient.city}</InfoText>
        </InfoArea>
        <DetailsButton onPress={() => detailsaction(delivery.id)}>
          <DetailsText>Ver Detalhes</DetailsText>
        </DetailsButton>
      </Footer>
    </Container>
  );
};

DeliveryItem.propTypes = {
  delivery: PropTypes.objectOf(String).isRequired,
  detailsaction: PropTypes.func.isRequired,
};

export default DeliveryItem;
