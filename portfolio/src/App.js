import React from 'react';
import '@fontsource/roboto';
import './App.css'
import MiniDrawer from './Componentes/Menu';
import fondo from './Recursos/cool-background.png'
import Home from './Componentes/Home/Home';
import theme from './Recursos/Theme';
import { ThemeProvider } from '@material-ui/styles';
import About_me from './Componentes/About_Me/About_me';
import Scroller from './Componentes/Scroller';
import { CssBaseline } from '@material-ui/core';
import Projects from './Componentes/Projects/Projects';
import {Switch, Route, Router} from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Scroller></Scroller>

        
      </ThemeProvider>
    );
  }

}

export default App;
