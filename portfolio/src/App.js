import React from 'react';
import '@fontsource/roboto';
import svg from './Recursos/cool-background.svg';
import './App.css'
import MiniDrawer from './Componentes/Menu';
import { Grid } from '@material-ui/core'
import { width } from '@material-ui/system';

class App extends React.Component {
  render() {
    return (
      <div className={'fondo'}>
        <MiniDrawer/>
      </div>
    );
  }

}

export default App;
