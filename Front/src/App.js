import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavi from '../Navigations/AppStackNavi';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer>
      <AppStackNavi />
    </NavigationContainer>
  );
};

export default App;
