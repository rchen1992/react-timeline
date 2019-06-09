import React from 'react';
import styled from 'styled-components';
import { StateContext } from 'store';

const Cell = styled.div`
    grid-column-start: ${props => props.colStart};
    grid-column-end: ${props => `span ${props.colSpan}`};
    grid-row-start: ${props => props.row};
    background-color: ${props => props.eventColor};
    color: white;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    align-items: center;
    overflow: hidden;

    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
        cursor: pointer;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }
`;

const NameWrapper = styled.p`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 0;
`;

function TimelineEvent(props) {
    const { colStart, colSpan, row, color, name } = props.event;
    const { setEditEventOpen, setEditEvent } = React.useContext(StateContext);

    /**
     * Open edit event modal on click.
     */
    function onClick() {
        setEditEvent(props.event);
        setEditEventOpen(true);
    }

    return (
        <Cell colStart={colStart} colSpan={colSpan} row={row} eventColor={color} onClick={onClick}>
            <NameWrapper>{name}</NameWrapper>
        </Cell>
    );
}

export default TimelineEvent;
