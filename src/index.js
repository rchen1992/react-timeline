import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Main from 'components/Main';
import theme from 'style/theme';
import { StateProvider } from 'store';
import 'style/index.css';
import 'antd/dist/antd.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <StateProvider>
                <Main />
            </StateProvider>
        </ThemeProvider>
    );
}

render(<App />, document.getElementById('root'));
