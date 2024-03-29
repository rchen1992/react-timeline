import moment from 'moment';
import colors from 'style/eventColors';
import { getEventsWithDateObjects } from '../util';

const currentYear = moment().year();

/**
 * Default hardcoded events to show when there is no data.
 * Note: these events should sorted, because if we had real
 * data from the backend, we'd expect it to be already sorted.
 */
const events = [
    {
        id: 1,
        start: `${currentYear}-01-01`,
        end: `${currentYear}-01-05`,
        name: 'Avengers: Endgame',
        color: colors.blue,
    },
    {
        id: 2,
        start: `${currentYear}-01-02`,
        end: `${currentYear}-01-08`,
        name: 'John Wick',
        color: colors.redOrange,
    },
    {
        id: 3,
        start: `${currentYear}-01-03`,
        end: `${currentYear}-01-09`,
        name: 'Spiderman',
        color: colors.orange,
    },
    {
        id: 4,
        start: `${currentYear}-01-04`,
        end: `${currentYear}-01-08`,
        name: 'Toy Story',
        color: colors.orange,
    },
    {
        id: 5,
        start: `${currentYear}-01-06`,
        end: `${currentYear}-01-13`,
        name: 'Memento',
        color: colors.turquoise,
    },
    {
        id: 6,
        start: `${currentYear}-01-06`,
        end: `${currentYear}-01-13`,
        name: 'Star Wars Episode III',
        color: colors.turquoise,
    },
    {
        id: 7,
        start: `${currentYear}-01-09`,
        end: `${currentYear}-01-15`,
        name: 'Mission Impossible: Fallout',
        color: colors.turquoise,
    },
    {
        id: 8,
        start: `${currentYear}-01-12`,
        end: `${currentYear}-02-16`,
        name: 'Baby Driver',
        color: colors.turquoise,
    },
    {
        id: 9,
        start: `${currentYear}-01-12`,
        end: `${currentYear}-02-16`,
        name: "Harry Potter and the Sorcerer's Stone",
        color: colors.redOrange,
    },
    {
        id: 10,
        start: `${currentYear}-01-14`,
        end: `${currentYear}-01-17`,
        name: 'The Lion King',
        color: colors.blue,
    },
    {
        id: 11,
        start: `${currentYear}-02-01`,
        end: `${currentYear}-02-15`,
        name: 'The Matrix',
        color: colors.turquoise,
    },
    {
        id: 12,
        start: `${currentYear}-02-01`,
        end: `${currentYear}-02-05`,
        name: 'Terminator',
        color: colors.orange,
    },
    {
        id: 13,
        start: `${currentYear}-02-02`,
        end: `${currentYear}-02-15`,
        name: 'Thor: Ragnarok',
        color: colors.orange,
    },
    {
        id: 14,
        start: `${currentYear}-02-02`,
        end: `${currentYear}-02-08`,
        name: 'Get Out',
        color: colors.orange,
    },
    {
        id: 15,
        start: `${currentYear}-02-10`,
        end: `${currentYear}-03-10`,
        name: 'Black Panther',
        color: colors.redOrange,
    },
    {
        id: 16,
        start: `${currentYear}-02-12`,
        end: `${currentYear}-03-05`,
        name: 'A Star is Born',
        color: colors.lightGreen,
    },
    {
        id: 17,
        start: `${currentYear}-02-12`,
        end: `${currentYear}-03-20`,
        name: 'Aladdin',
        color: colors.lightGreen,
    },
    {
        id: 18,
        start: `${currentYear}-02-18`,
        end: `${currentYear}-03-18`,
        name: "Schindler's List",
        color: colors.lightGreen,
    },
];

const eventsWithMoment = getEventsWithDateObjects(events);

export default eventsWithMoment;
