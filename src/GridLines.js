import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { GRID_DATE_DISPLAY_FORMAT } from './config';

const Line = styled.div`
    border-right: 1px solid #dfdfdf;
    grid-column-start: ${props => props.colStart};
    grid-column-end: span ${props => props.lineSpan};
    grid-row-start: 1;
    grid-row-end: ${props => props.numRows};
    z-index: -1;
`;

const Date = styled.div`
    grid-column-start: ${props => props.colStart};
    grid-column-end: span 2;
    grid-row-start: ${props => props.numRows};
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
