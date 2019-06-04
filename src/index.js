import React from 'react';
import { render } from 'react-dom';
import timelineItems from './timelineItems';
import Timeline from 'components/Timeline';
import { START_MONTH, START_YEAR, MONTH_SPAN } from './config';
import 'style/index.css';
import 'antd/dist/antd.css';

const App = () => (
    <div>
        <div>
            <div>Hello World</div>
        </div>
        <Timeline
            events={timelineItems}
            startMonth={START_MONTH}
            startYear={START_YEAR}
            monthSpan={MONTH_SPAN}
        />
    </div>
);

render(<App />, document.getElementById('root'));
