import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import NewEventTrigger from './NewEventTrigger';
import { Button, DatePicker } from 'antd';
import { StateContext } from 'store';

const Year = styled.span`
    font-weight: bold;
    margin-right: 10px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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
            <Container>
                <div>
                    <Year>{year}</Year>
                    <DatePicker placeholder="Jump to date" onChange={onDateChange} />
                </div>
                <NewEventTrigger />
            </Container>
        </Header>
    );
}

export default AppControls;
