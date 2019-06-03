import React from 'react';
import styled from 'styled-components';

const Cell = styled.div`
    grid-column-start: ${props => props.colStart};
    grid-column-end: ${props => `span ${props.colSpan}`};
    grid-row-start: ${props => props.row};
    background-color: #3498db;
    color: white;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
`;

function TimelineEvent(props) {
    return (
        <Cell colStart={props.colStart} colSpan={props.colSpan} row={props.row}>
            {props.name}
        </Cell>
    );
}

export default TimelineEvent;
