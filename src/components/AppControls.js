import React from 'react';
import Header from './Header';
import { DatePicker } from 'antd';

function AppControls(props) {
    return (
        <Header>
            <DatePicker placeholder="Jump to date" />
        </Header>
    );
}

export default AppControls;
