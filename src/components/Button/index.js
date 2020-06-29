import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({ children, loading, background, ...rest }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container background={background} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  background: PropTypes.string,
};

Button.defaultProps = {
  loading: false,
  background: '#7D40E7',
};
