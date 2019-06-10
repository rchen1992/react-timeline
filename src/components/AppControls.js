import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import NewEventTrigger from './NewEventTrigger';
import { DatePicker, Button } from 'antd';
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

const ZoomControls = styled.div`
    display: inline-block;
    margin-left: 10px;
`;

function AppControls() {
    const {
        year,
        setYear,
        setSelectedDay,
        zoomIn,
        zoomOut,
        isZoomedInAtMax,
        isZoomedOutAtMax,
    } = React.useContext(StateContext);

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
                    <ZoomControls>
                        <Button icon="zoom-out" onClick={zoomOut} disabled={isZoomedOutAtMax} />
                        <Button icon="zoom-in" onClick={zoomIn} disabled={isZoomedInAtMax} />
                    </ZoomControls>
                </div>
                <NewEventTrigger />
            </Container>
        </Header>
    );
}

export default AppControls;
