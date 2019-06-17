// The month that the timeline starts at.
export const START_MONTH = 0;

// The number of months the timeline spans.
export const MONTH_SPAN = 12;

// The number of rows in the grid.
export const GRID_NUM_ROWS = 12;

// Date format for events.
export const EVENT_DATE_FORMAT = 'YYYY-MM-DD';

// Date format for dates on the grid.
export const GRID_DATE_DISPLAY_FORMAT = 'MMM D';

/**
 * The different configurations of zoom.
 * @param monthsPerPage - number of months to fit in the viewport at one time, without scrolling
 * @param gridLineSpan - number of days between each grid date/line
 */
export const ZOOM_LEVELS = [
    {
        monthsPerPage: 6,
        gridLineSpan: 42,
    },
    {
        monthsPerPage: 4,
        gridLineSpan: 28,
    },
    {
        monthsPerPage: 3,
        gridLineSpan: 21,
    },
    {
        monthsPerPage: 2,
        gridLineSpan: 14,
    },
    {
        monthsPerPage: 1,
        gridLineSpan: 7,
    },
    {
        monthsPerPage: 0.5,
        gridLineSpan: 2,
    },
];
