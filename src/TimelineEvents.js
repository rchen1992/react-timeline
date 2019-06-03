import React from 'react';
import { prepareEvents } from './util';
import TimelineEvent from './TimelineEvent';

function TimelineEvents(props) {
    const eventsWithPositioning = prepareEvents(props.events, props.startMonth, props.startYear);
    const events = eventsWithPositioning.map(event => <TimelineEvent key={event.id} {...event} />);

    return <>{events}</>;
}

export default TimelineEvents;
