import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/navigation/router';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
};

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
