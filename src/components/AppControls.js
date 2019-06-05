import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { DatePicker } from 'antd';
import { StateContext } from 'store';

const Year = styled.span`
    font-weight: bold;
    margin-right: 10px;
`;

function AppControls(props) {
    const { year, setYear, setSelectedDay } = React.useContext(StateContext);
    function onDateChange(date) {
        if (date) {
            setYear(date.year());
            setSelectedDay(date.dayOfYear());
        }
    }

    return (
        <Header>
            <Year>{year}</Year>
            <DatePicker placeholder="Jump to date" onChange={onDateChange} />
        </Header>
    );
}

export default AppControls;
