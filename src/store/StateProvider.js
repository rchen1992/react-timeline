import React from 'react';
import StateContext from './StateContext';
import defaultState from './defaultState';
import { getSortedNewEventIndex, getEventsWithEventRemoved } from '../util';
import { ZOOM_LEVELS } from '../config';

function StateProvider(props) {
    const [year, setYear] = React.useState(defaultState.year);
    const [selectedDay, setSelectedDay] = React.useState(defaultState.selectedDay);
    const [sortedEvents, setSortedEvents] = React.useState(defaultState.sortedEvents);
    const [nextEventId, setNextEventId] = React.useState(defaultState.nextEventId);
    const [editEventOpen, setEditEventOpen] = React.useState(defaultState.editEventOpen);
    const [editEvent, setEditEvent] = React.useState(defaultState.editEvent);
    const [zoomLevel, setZoomLevel] = React.useState(defaultState.zoomLevel);

    const zoomLevelConfig = ZOOM_LEVELS[zoomLevel];
    const isZoomedInAtMax = zoomLevel >= ZOOM_LEVELS.length - 1;
    const isZoomedOutAtMax = zoomLevel <= 0;

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
        const originalEventIndex = sortedEvents.findIndex(event => event.id === editedEvent.id);
        if (originalEventIndex === -1) {
            throw new Error(`Event with id: '${editedEvent.id}' could not be found.`);
        }

        const originalEvent = sortedEvents[originalEventIndex];

        /**
         * If the start and end date didn't change, we don't have to re-sort the events.
         * Simply replace the existing event with the edited event.
         */
        if (
            originalEvent.startObj.isSame(editedEvent.startObj) &&
            originalEvent.endObj.isSame(editedEvent.endObj)
        ) {
            setSortedEvents([
                ...sortedEvents.slice(0, originalEventIndex),
                editedEvent,
                ...sortedEvents.slice(originalEventIndex + 1),
            ]);
        } else {
            // Otherwise, we need to remove the event and place it in its new place in the sorted array.
            // First, remove the edited event.
            const withoutEditedEvent = getEventsWithEventRemoved(editedEvent.id, sortedEvents);

            // Find index of its new position, since the start/end date has changed.
            const newEventIndex = getSortedNewEventIndex(editedEvent, withoutEditedEvent);

            setSortedEvents([
                ...withoutEditedEvent.slice(0, newEventIndex),
                editedEvent,
                ...withoutEditedEvent.slice(newEventIndex),
            ]);
        }
    }

    function onDeleteEvent(eventId) {
        setSortedEvents(events => getEventsWithEventRemoved(eventId, events));
    }

    function zoomOut() {
        if (zoomLevel <= 0) {
            return;
        }

        setZoomLevel(level => level - 1);
    }

    function zoomIn() {
        if (zoomLevel >= ZOOM_LEVELS.length - 1) {
            return;
        }

        setZoomLevel(level => level + 1);
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
        onDeleteEvent,
        zoomLevel,
        zoomLevelConfig,
        zoomOut,
        zoomIn,
        isZoomedInAtMax,
        isZoomedOutAtMax,
    };

    return <StateContext.Provider value={state}>{props.children}</StateContext.Provider>;
}

export default StateProvider;
