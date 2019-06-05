import React from 'react';
import styled from 'styled-components';
import TimelineEvents from './TimelineEvents';
import GridLines from './GridLines';
import { getNumberOfDaysInMonths } from '../util';
import { GRID_LINE_SPAN, GRID_NUM_ROWS } from '../config';

const Grid = styled.div`
    display: grid;
    width: ${props => `${props.monthSpan * 100}%`};
    height: ${({ theme }) => `calc(100vh - ${theme.headerHeight}px)`};
    overflow-x: scroll;
    grid-template-columns: ${props => `repeat(${props.numCols}, 1fr);`};
    grid-template-rows: ${props => `repeat(${props.numRows}, 1fr);`};
    grid-row-gap: 10px;
    padding: 10px;
    border-top: 1px solid #dfdfdf;
`;

function Timeline(props) {
    const numCols = getNumberOfDaysInMonths(props.startMonth, props.monthSpan);

    return (
        <Grid numCols={numCols} numRows={GRID_NUM_ROWS} monthSpan={props.monthSpan}>
            <TimelineEvents events={props.events} startMonth={props.startMonth} />
            <GridLines
                numCols={numCols}
                numRows={GRID_NUM_ROWS}
                lineSpan={GRID_LINE_SPAN}
                startMonth={props.startMonth}
            />
        </Grid>
    );
}

export default Timeline;
