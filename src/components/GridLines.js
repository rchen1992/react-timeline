import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { GRID_DATE_DISPLAY_FORMAT } from '../config';

/**
 * We have to set inline styles with `.attrs`
 * since these values are dynamic (because of zoom),
 * and at certain levels of zoom, it blows up the
 * head tag with all the generated styles.
 *
 * More details here: https://github.com/styled-components/styled-components/issues/134
 */
const Line = styled.div.attrs(props => ({
    style: {
        gridColumnStart: props.colStart,
        gridColumnEnd: `span ${props.lineSpan}`,
        gridRowEnd: props.numRows,
    },
}))`
    border-right: 1px solid #dfdfdf;
    grid-row-start: 1;
    z-index: -1;
`;

const Date = styled.div.attrs(props => ({
    style: {
        gridColumnStart: props.colStart,
        gridRowStart: props.numRows,
    },
}))`
    grid-column-end: span 2;
    grid-row-end: span 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function GridLines(props) {
    const lineCount = Math.floor(props.numCols / props.lineSpan);
    const startMonth = moment(props.startMonth + 1, 'MM');

    let gridLines = [];
    let gridDates = [];

    /**
     * Calculate the position of each grid line and corresponding grid date.
     */
    for (let i = 0; i < lineCount; i++) {
        const lineColStart = i * props.lineSpan + 1;
        const dateColStart = lineColStart + props.lineSpan - 1;
        const currentDate = startMonth.add(props.lineSpan, 'days').format(GRID_DATE_DISPLAY_FORMAT);

        gridLines.push(
            <Line
                key={i}
                colStart={lineColStart}
                numRows={props.numRows}
                lineSpan={props.lineSpan}
            />
        );

        gridDates.push(
            <Date key={currentDate} colStart={dateColStart} numRows={props.numRows}>
                {currentDate}
            </Date>
        );
    }

    return (
        <>
            {gridLines}
            {gridDates}
        </>
    );
}

export default GridLines;
