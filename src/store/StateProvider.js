import React from 'react';
import StateContext from './StateContext';
import defaultState from './defaultState';

function StateProvider(props) {
    const [year, setYear] = React.useState(defaultState.year);
    const [selectedDay, setSelectedDay] = React.useState(defaultState.selectedDay);
    const [sortedEvents, setSortedEvents] = React.useState(defaultState.sortedEvents);
    const [nextEventId, setNextEventId] = React.useState(defaultState.nextEventId);
    const [editEventOpen, setEditEventOpen] = React.useState(defaultState.editEventOpen);
    const [editEvent, setEditEvent] = React.useState(defaultState.editEvent);

    function onAddEvent(newEvent) {
        /**
         * Find where to insert the new event into
         * the sorted array of events.
         */
        let newEventIndex = sortedEvents.findIndex(event =>
            newEvent.startObj.isBefore(event.startObj)
        );
        if (newEventIndex === -1) {
            newEventIndex = sortedEvents.length;
        }

        // Insert
        setSortedEvents(events => [
            ...sortedEvents.slice(0, newEventIndex),
            {
                ...newEvent,
                id: nextEventId,
            },
            ...sortedEvents.slice(newEventIndex),
        ]);

        // Increment next event ID
        setNextEventId(id => id + 1);
    }

    const state = {
        year,
        setYear,
        selectedDay,
        setSelectedDay,
        sortedEvents,
        onAddEvent,
        editEventOpen,
        setEditEventOpen,
        editEvent,
        setEditEvent,
    };

    return <StateContext.Provider value={state}>{props.children}</StateContext.Provider>;
}

export default StateProvider;
