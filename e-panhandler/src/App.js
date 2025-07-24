import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/donate" component={Donate} />
                    <Route path="/statistics" component={Statistics} />
                    <Route path="/resources" component={Resources} />
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;