import React from 'react';
import StateContext from './StateContext';
import defaultState from './defaultState';
import { getSortedNewEventIndex } from '../util';

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
        const newEventIndex = getSortedNewEventIndex(newEvent, sortedEvents);

        // Insert
        setSortedEvents(events => [
            ...events.slice(0, newEventIndex),
            {
                ...newEvent,
                id: nextEventId,
            },
            ...events.slice(newEventIndex),
        ]);

        // Increment next event ID
        setNextEventId(id => id + 1);
    }

    function onEditEvent(editedEvent) {
        const editedEventIndex = sortedEvents.findIndex(event => event.id === editedEvent.id);
        if (editedEventIndex === -1) {
            throw new Error(`Event with id: '${editedEvent.id}' could not be found.`);
        }

        // First, remove the edited event.
        const withoutEditedEvent = [
            ...sortedEvents.slice(0, editedEventIndex),
            ...sortedEvents.slice(editedEventIndex + 1),
        ];

        // Find index of its new position, in case the start/end date has changed.
        const newEventIndex = getSortedNewEventIndex(editedEvent, withoutEditedEvent);

        setSortedEvents([
            ...withoutEditedEvent.slice(0, newEventIndex),
            {
                ...editedEvent,
            },
            ...withoutEditedEvent.slice(newEventIndex),
        ]);
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
        onEditEvent,
    };

    return <StateContext.Provider value={state}>{props.children}</StateContext.Provider>;
}

export default StateProvider;
