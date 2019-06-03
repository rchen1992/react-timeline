import React from 'react';
import { render } from 'react-dom';
import timelineItems from './timelineItems';
import Timeline from './Timeline';
import { START_MONTH, START_YEAR, MONTH_SPAN } from './config';
import './index.css';

const App = () => (
    <div>
        <Timeline
            events={timelineItems}
            startMonth={START_MONTH}
            startYear={START_YEAR}
            monthSpan={MONTH_SPAN}
        />
    </div>
);

render(<App />, document.getElementById('root'));
