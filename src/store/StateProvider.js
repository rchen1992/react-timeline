import React from 'react';
import StateContext from './StateContext';
import defaultState from './defaultState';

function StateProvider(props) {
    const [year, setYear] = React.useState(defaultState.year);
    const [selectedDay, setSelectedDay] = React.useState(defaultState.selectedDay);

    const state = {
        year,
        setYear,
        selectedDay,
        setSelectedDay,
    };

    return <StateContext.Provider value={state}>{props.children}</StateContext.Provider>;
}

export default StateProvider;
