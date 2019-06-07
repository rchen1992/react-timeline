import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Timeline from 'components/Timeline';
import AppControls from 'components/AppControls';
import { START_MONTH, MONTH_SPAN } from './config';
import theme from 'style/theme';
import { StateProvider } from 'store';
import 'style/index.css';
import 'antd/dist/antd.css';

const App = () => (
    <ThemeProvider theme={theme}>
        <StateProvider>
            <AppControls />
            <Timeline startMonth={START_MONTH} monthSpan={MONTH_SPAN} />
        </StateProvider>
    </ThemeProvider>
);

render(<App />, document.getElementById('root'));
