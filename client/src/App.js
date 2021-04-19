import React, { useState, useEffect } from 'react'
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LandingComponent from './components/LandingPage/LandingComponent';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import LoadingPage from './components/common/LoadingPage';

// custom font
const font = 'Fira Sans';

// defining a custom style
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#041F3A",
      light: "#5C9AFF",
      dark: "#121511",
      contrastText: "#FAF9F9"
    },
    secondary: {
      main: "#FF3B0A"
    }
  },
  typography: {
    fontFamily: font,
  }
});

function App() {
  const [loading, setLoading] = useState(true);

  // set laoding to false after DOM exists
  useEffect(() => {
      setLoading(false);
  }, []);

  return (
    <> 
    {loading === false ? (
      <ThemeProvider theme={theme}>
      <div className="App">
        <Router> 
          <Switch>
              <Route exact path="/" component={LandingComponent}></Route>
          </Switch> 
        </Router>
      </div>
    </ThemeProvider>    
    ) : (
      <ThemeProvider theme={theme}>
        <div className="App">
          <LoadingPage />
        </div>
      </ThemeProvider>
    ) }
    </>
  );
}

export default App;
