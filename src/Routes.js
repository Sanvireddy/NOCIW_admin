import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Login from './pages/Loginpage';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" initial={true} />
        </Stack>
      </Router>
    );
  }
}
