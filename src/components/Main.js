import React from 'react';
import Timeline from './Timeline';
import EditEventTrigger from './EditEventTrigger';
import AppControls from './AppControls';
import { START_MONTH, MONTH_SPAN } from '../config';

function Main() {
    return (
        <>
            <AppControls />
            <Timeline startMonth={START_MONTH} monthSpan={MONTH_SPAN} />
            <EditEventTrigger />
        </>
    );
}

export default Main;
