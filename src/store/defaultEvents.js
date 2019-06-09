import colors from 'style/eventColors';
import { getEventsWithDateObjects } from '../util';

/**
 * Default hardcoded events to show when there is no data.
 * Note: these events should sorted, because if we had real
 * data from the backend, we'd expect it to be already sorted.
 */
const events = [
    {
        id: 1,
        start: '2018-01-01',
        end: '2018-01-05',
        name: 'Avengers: Endgame',
        color: colors.blue,
    },
    {
        id: 2,
        start: '2018-01-02',
        end: '2018-01-08',
        name: 'John Wick',
        color: colors.redOrange,
    },
    {
        id: 3,
        start: '2018-01-03',
        end: '2018-01-05',
        name: 'Spiderman',
        color: colors.orange,
    },
    {
        id: 4,
        start: '2018-01-04',
        end: '2018-01-08',
        name: 'Toy Story',
        color: colors.orange,
    },
    {
        id: 5,
        start: '2018-01-06',
        end: '2018-01-13',
        name: 'Memento',
        color: colors.turquoise,
    },
    {
        id: 6,
        start: '2018-01-06',
        end: '2018-01-13',
        name: 'Star Wars Episode III',
        color: colors.turquoise,
    },
    {
        id: 7,
        start: '2018-01-09',
        end: '2018-01-11',
        name: 'Mission Impossible: Fallout',
        color: colors.turquoise,
    },
    {
        id: 8,
        start: '2018-01-12',
        end: '2018-02-16',
        name: 'Baby Driver',
        color: colors.turquoise,
    },
    {
        id: 9,
        start: '2018-01-12',
        end: '2018-02-16',
        name: "Harry Potter and the Sorcerer's Stone",
        color: colors.redOrange,
    },
    {
        id: 10,
        start: '2018-01-14',
        end: '2018-01-17',
        name: 'The Lion King',
        color: colors.blue,
    },
    {
        id: 11,
        start: '2018-02-01',
        end: '2018-02-15',
        name: 'The Matrix',
        color: colors.turquoise,
    },
    {
        id: 12,
        start: '2018-02-01',
        end: '2018-02-05',
        name: 'Terminator',
        color: colors.orange,
    },
    {
        id: 13,
        start: '2018-02-02',
        end: '2018-02-15',
        name: 'Thor: Ragnarok',
        color: colors.orange,
    },
    {
        id: 14,
        start: '2018-02-02',
        end: '2018-02-04',
        name: 'Get Out',
        color: colors.orange,
    },
];

const eventsWithMoment = getEventsWithDateObjects(events);

export default eventsWithMoment;
