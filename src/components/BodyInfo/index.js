import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, Header, TitleLine, Title, Body } from './styles';

const BodyInfo = ({ children, title, icon, ...rest }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container {...rest}>
      <Header>
        {title ? (
          <TitleLine>
            <Icon name={icon} size={20} color="#7D40E7" />
            <Title>{title}</Title>
          </TitleLine>
        ) : null}
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

BodyInfo.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  title: PropTypes.string,
  icon: PropTypes.string,
};

BodyInfo.defaultProps = {
  title: '',
  icon: 'local-shipping',
};

export default BodyInfo;
