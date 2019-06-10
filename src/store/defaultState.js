import defaultEvents from './defaultEvents';
import moment from 'moment';

export default {
    year: moment().year(),
    selectedDay: null,
    sortedEvents: defaultEvents,
    nextEventId: defaultEvents.length + 1,
    editEventOpen: false,
    editEvent: null,
    zoomLevel: 4,
};
