import moment from 'moment';

/**
 * Local storage keys
 */
const EVENT_KEY = 'timelineEvents';
const NEXT_EVENT_ID_KEY = 'nextEventId';

/**
 * Prepares event array for local storage.
 * Removes moment objects.
 */
function prepareEventsForStorage(events) {
    const prepared = events.map(event => {
        const { startObj, endObj, ...rest } = event;
        return rest;
    });

    return JSON.stringify(prepared);
}

/**
 * Save events to local storage.
 */
export function saveEvents(events) {
    localStorage.setItem(EVENT_KEY, prepareEventsForStorage(events));
}

/**
 * Retrieve events from local storage.
 * Adds moment wrappers around start and end dates.
 */
export function getEvents() {
    const events = localStorage.getItem(EVENT_KEY);
    if (!events) {
        return [];
    }

    const parsedEvents = JSON.parse(events);
    return parsedEvents.map(event => ({
        ...event,
        startObj: moment(event.start),
        endObj: moment(event.end),
    }));
}

/**
 * Saves next event ID into local storage.
 */
export function saveNextEventId(id) {
    localStorage.setItem(NEXT_EVENT_ID_KEY, id.toString());
}

/**
 * Retrieves next event Id from local storage.
 */
export function getNextEventId() {
    return parseInt(localStorage.getItem(NEXT_EVENT_ID_KEY));
}
