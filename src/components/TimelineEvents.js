import React from 'react';
import { prepareEvents } from '../util';
import TimelineEvent from './TimelineEvent';
import { StateContext } from 'store';

function TimelineEvents(props) {
    const { year } = React.useContext(StateContext);
    const eventsWithPositioning = prepareEvents(props.events, props.startMonth, year);
    const events = eventsWithPositioning.map(event => <TimelineEvent key={event.id} {...event} />);

    return <>{events}</>;
}

export default TimelineEvents;
