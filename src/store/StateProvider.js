import React from 'react';
import StateContext from './StateContext';
import defaultState from './defaultState';

function StateProvider(props) {
    const [year, setYear] = React.useState(defaultState.year);
    const [selectedDay, setSelectedDay] = React.useState(defaultState.selectedDay);
    const [events, setEvents] = React.useState(defaultState.events);
    const [nextEventId, setNextEventId] = React.useState(defaultState.nextEventId);

    function onAddEvent(event) {
        setEvents(events => [
            ...events,
            {
                ...event,
                id: nextEventId,
            },
        ]);

        setNextEventId(id => id + 1);
    }

    const state = {
        year,
        setYear,
        selectedDay,
        setSelectedDay,
        events,
        onAddEvent,
    };

    return <StateContext.Provider value={state}>{props.children}</StateContext.Provider>;
}

export default StateProvider;
