import React from 'react';
import { prepareEvents } from '../util';
import TimelineEvent from './TimelineEvent';
import { StateContext } from 'store';

function TimelineEvents(props) {
    const { year, events } = React.useContext(StateContext);
    const eventsWithPositioning = prepareEvents(events, props.startMonth, year);
    const eventItems = eventsWithPositioning.map(event => (
        <TimelineEvent key={event.id} {...event} />
    ));

    return <>{eventItems}</>;
}

export default TimelineEvents;
