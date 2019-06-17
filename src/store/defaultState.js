import defaultEvents from './defaultEvents';
import moment from 'moment';
import { getEvents, saveEvents, saveNextEventId, getNextEventId } from './persistence';

/**
 * Try get events from storage.
 * If they don't exist, use default events
 * and save them to storage.
 */
let events = getEvents();
if (events.length === 0) {
    events = defaultEvents;
    saveEvents(events);
}

/**
 * Get next event ID from storage.
 */
let nextEventId = getNextEventId();
if (!nextEventId) {
    nextEventId = events.length + 1;
    saveNextEventId(nextEventId);
}

export default {
    year: moment().year(),
    selectedDay: null,
    sortedEvents: events,
    nextEventId,
    editEventOpen: false,
    editEvent: null,
    zoomLevel: 4,
};
