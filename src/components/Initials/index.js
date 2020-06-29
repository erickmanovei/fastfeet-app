import React from 'react';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';

import { Container, Img, Text } from './styles';

const getInitials = (string) => {
  const names = string.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};

const Initials = ({ name, size, image }) => {
  if (image) {
    return <Img src={image} />;
  }

  const color = randomColor({
    luminosity: 'light',
  });
  const initials = getInitials(name);
  return (
    <Container color={color} size={size}>
      <Text color={color} size={size}>
        {initials}
      </Text>
    </Container>
  );
};

Initials.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  image: PropTypes.string,
};
Initials.defaultProps = {
  image: null,
};

export default Initials;
