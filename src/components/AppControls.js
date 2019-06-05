import React from 'react';
import Header from './Header';
import { DatePicker } from 'antd';
import { StateContext } from 'store';

function AppControls(props) {
    const { setYear, setSelectedDay } = React.useContext(StateContext);
    function onDateChange(date) {
        if (date) {
            setYear(date.year());
            setSelectedDay(date.dayOfYear());
        }
    }

    return (
        <Header>
            <DatePicker placeholder="Jump to date" onChange={onDateChange} />
        </Header>
    );
}

export default AppControls;
