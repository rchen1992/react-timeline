import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import timelineItems from './timelineItems';
import Timeline from 'components/Timeline';
import AppControls from 'components/AppControls';
import { START_MONTH, START_YEAR, MONTH_SPAN } from './config';
import theme from 'style/theme';
import 'style/index.css';
import 'antd/dist/antd.css';

const App = () => (
    <ThemeProvider theme={theme}>
        <>
            <AppControls />
            <Timeline
                events={timelineItems}
                startMonth={START_MONTH}
                startYear={START_YEAR}
                monthSpan={MONTH_SPAN}
            />
        </>
    </ThemeProvider>
);

render(<App />, document.getElementById('root'));
