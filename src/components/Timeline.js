import React from 'react';
import styled from 'styled-components';
import TimelineEvents from './TimelineEvents';
import GridLines from './GridLines';
import { getNumberOfDaysInMonths, getJumpToDateScrollPosition } from '../util';
import { GRID_LINE_SPAN, GRID_NUM_ROWS } from '../config';
import { StateContext } from 'store';

const ScrollContainer = styled.div`
    width: 100%;
    height: ${({ theme }) => `calc(100vh - ${theme.headerHeight}px)`};
    overflow: scroll;
    white-space: nowrap;
`;

const Grid = styled.div`
    display: grid;
    width: ${props => `${props.monthSpan * 100}%`};
    height: 100%;
    grid-template-columns: ${props => `repeat(${props.numCols}, 1fr);`};
    grid-template-rows: ${props => `repeat(${props.numRows}, 1fr);`};
    grid-row-gap: 10px;
    padding: 10px;
    border-top: 1px solid #dfdfdf;
`;

function Timeline(props) {
    const { selectedDay } = React.useContext(StateContext);
    const containerRef = React.useRef(null);
    const gridRef = React.useRef(null);
    const numCols = getNumberOfDaysInMonths(props.startMonth, props.monthSpan);

    /**
     * Whenever a jump-to-date day is selected,
     * smoothly scroll the timeline to that day.
     */
    React.useEffect(() => {
        if (selectedDay) {
            const scrollLeft = getJumpToDateScrollPosition(
                selectedDay,
                gridRef.current.offsetWidth
            );

            containerRef.current.scrollTo({
                left: scrollLeft,
                behavior: 'smooth',
            });
        }
    }, [selectedDay]);

    return (
        <ScrollContainer ref={containerRef}>
            <Grid
                ref={gridRef}
                numCols={numCols}
                numRows={GRID_NUM_ROWS}
                monthSpan={props.monthSpan}
            >
                <TimelineEvents events={props.events} startMonth={props.startMonth} />
                <GridLines
                    numCols={numCols}
                    numRows={GRID_NUM_ROWS}
                    lineSpan={GRID_LINE_SPAN}
                    startMonth={props.startMonth}
                />
            </Grid>
        </ScrollContainer>
    );
}

export default Timeline;
