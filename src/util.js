import moment from 'moment';
import { EVENT_DATE_FORMAT } from './config';

/**
 * Wraps start and end dates with moment.
 */
export function getEventsWithDateObjects(events) {
    return events.map(event => {
        return {
            ...event,
            startObj: getDateObjFromString(event.start),
            endObj: getDateObjFromString(event.end),
        };
    });
}

/**
 * Returns a moment object from a date string.
 */
function getDateObjFromString(dateString) {
    return moment(dateString, EVENT_DATE_FORMAT);
}

/**
 * Sorts events by their start date ASC.
 */
function sortEventsByStartDate(events) {
    return events.sort((a, b) => a.startObj.unix() - b.startObj.unix());
}

/**
 * Returns true if two event dates have any overlap.
 * @param a - event object
 * @param b - event object
 */
function eventDatesOverlap(a, b) {
    return a.startObj.unix() < b.endObj.unix() && b.startObj.unix() < a.endObj.unix();
}

/**
 * Loops through an array of sorted events and
 * adds information on which row the event
 * should be placed on.
 * @param sortedEvents - events sorted by start date ASC
 */
function getEventsWithRowPositions(sortedEvents) {
    let result = [];
    let addToRow = 1;
    let lastRowEvents = [];

    sortedEvents.forEach(event => {
        if (result.length > 0) {
            /**
             * Starting with the first row,
             * we need to look through all rows where we have previously
             * placed an event to find the first available row.
             * A row is available if the previous event doesn't overlap with the current event.
             */
            let i = 0;
            for (; i < lastRowEvents.length; i++) {
                const lastRowEvent = lastRowEvents[i];
                if (!eventDatesOverlap(lastRowEvent, event)) {
                    break;
                }
            }
            addToRow = i + 1;
        }

        const eventWithPosition = {
            ...event,
            row: addToRow,
        };

        result.push(eventWithPosition);
        lastRowEvents[addToRow - 1] = eventWithPosition;
    });

    return result;
}

/**
 * Loops through an array of sorted events and
 * adds information on which column the event
 * should be placed on.
 * @param sortedEvents - events sorted by start date ASC
 */
function getEventsWithColPositions(sortedEvents, startMonth, year) {
    const startDate = moment(startMonth + 1, 'MM').year(year);
    return sortedEvents.map(event => {
        return {
            ...event,
            colStart: event.startObj.diff(startDate, 'days') + 1,
            colSpan: event.endObj.diff(event.startObj, 'days'),
        };
    });
}

/**
 * Add row and col positioning data for each sorted event.
 * @param sortedEvents - events sorted by start date ASC
 * @param startMonth - month to start on
 */
function getEventsWithGridPositions(sortedEvents, startMonth, year) {
    const withRows = getEventsWithRowPositions(sortedEvents);
    return getEventsWithColPositions(withRows, startMonth, year);
}

/**
 * Returns events whose start date is in the target year.
 */
function getEventsInTargetYear(events, year) {
    return events.filter(event => event.startObj.year() === year);
}

/**
 * Prepares events for timeline.
 */
export function prepareEvents(events, startMonth, year) {
    const eventsInYear = getEventsInTargetYear(events, year);
    return getEventsWithGridPositions(eventsInYear, startMonth, year);
}

/**
 * Returns total number of days between multiple months.
 * @param startMonth - 0-11 index of the first month
 * @param monthSpan - number of months
 */
export function getNumberOfDaysInMonths(startMonth, monthSpan) {
    let days = 0;
    for (let i = 0; i < monthSpan; i++) {
        const month = startMonth + 1 + i;
        days += moment(month, 'MM').daysInMonth();
    }
    return days;
}

/**
 * Gets the scrollLeft position for a given day on the timeline.
 */
export function getJumpToDateScrollPosition(day, containerWidth) {
    // Get percentage of container to scroll.
    const percentage = day / 365;

    // Calculate the number of pixels to scroll based on percentage of container.
    const scrollLeft = containerWidth * percentage;

    // Subtract half the window width to center on the current day.
    return scrollLeft - window.innerWidth / 2;
}
