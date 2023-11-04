import './App.css';
import React from 'react';
import SampleCalendar from './components/SampleCalendar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#008cba',
        },
    },
    // ... other theme options
});

const App = () => (
    <ThemeProvider theme={theme}>
        <SampleCalendar />
    </ThemeProvider>
);

export default App;
