import React from 'react';
import PropTypes from 'prop-types';

import { TimelineArea, Boll, Line, StatusArea, Status } from './styles';

const Timeline = ({ delivery }) => {
  if (delivery.canceled_at) {
    return (
      <>
        <TimelineArea>
          <Boll checked />
        </TimelineArea>
        <StatusArea>
          <Status>Cancelado</Status>
        </StatusArea>
      </>
    );
  }
  if (!delivery.start_date) {
    return (
      <>
        <TimelineArea>
          <Boll checked />
          <Line />
          <Boll />
          <Line />
          <Boll />
        </TimelineArea>
        <StatusArea>
          <Status>Aguardando Retirada</Status>
          <Status>Retirada</Status>
          <Status>Entregue</Status>
        </StatusArea>
      </>
    );
  }
  if (!delivery.end_date) {
    return (
      <>
        <TimelineArea>
          <Boll checked />
          <Line />
          <Boll checked />
          <Line />
          <Boll />
        </TimelineArea>
        <StatusArea>
          <Status>Aguardando Retirada</Status>
          <Status>Retirada</Status>
          <Status>Entregue</Status>
        </StatusArea>
      </>
    );
  }
  return (
    <>
      <TimelineArea>
        <Boll checked />
        <Line />
        <Boll checked />
        <Line />
        <Boll checked />
      </TimelineArea>
      <StatusArea>
        <Status>Aguardando Retirada</Status>
        <Status>Retirada</Status>
        <Status>Entregue</Status>
      </StatusArea>
    </>
  );
};

Timeline.propTypes = {
  delivery: PropTypes.objectOf(String).isRequired,
};

export default Timeline;
