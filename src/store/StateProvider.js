import React from 'react';
import StateContext from './StateContext';
import defaultState from './defaultState';

function StateProvider(props) {
    const [year, setYear] = React.useState(defaultState.year);

    const state = {
        year,
        setYear,
    };

    return <StateContext.Provider value={state}>{props.children}</StateContext.Provider>;
}

export default StateProvider;
