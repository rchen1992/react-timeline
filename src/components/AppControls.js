import React from 'react';
import Header from './Header';
import { DatePicker } from 'antd';
import { StateContext } from 'store';

function AppControls(props) {
    const { setYear } = React.useContext(StateContext);
    function onDateChange(date) {
        if (date) {
            setYear(date.year());
        }
    }

    return (
        <Header>
            <DatePicker placeholder="Jump to date" onChange={onDateChange} />
        </Header>
    );
}

export default AppControls;
