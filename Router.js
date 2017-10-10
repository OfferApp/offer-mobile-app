import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './src/components/Login';
import SignUp from './src/components/SignUp';
import Main from './src/components/Main';

const RouterComponent = () => {
    console.log('Router Running');
    return (
      <Router sceneStyle={{ paddingTop: 5 }}>
        <Scene key="loginMain" >
          <Scene hideNavBar key="login" component={Login} />
        </Scene>
        <Scene key="signUpMain" >
          <Scene hideNavBar key="signup" component={SignUp} />
        </Scene>
        <Scene key="MainScreen" >
          <Scene hideNavBar key="CategoryScreen" component={Main} />
        </Scene>
      </Router>
    );
};

export default RouterComponent;
