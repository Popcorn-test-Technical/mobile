import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { INavigation } from '../types/interfaces';
import { ROUTES } from '../types/enums';

import Home from '../screens/Home';
import AddPoints from '../screens/AddPoints';

const Main = createStackNavigator<INavigation>();

const MainNaviagation = () => {
  return (
    <NavigationContainer>
      <Main.Navigator screenOptions={{ headerShown: false }}>
        <Main.Screen name={ROUTES.HOME} component={Home} />
        <Main.Screen name={ROUTES.ADD_POINTS} component={AddPoints} />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default MainNaviagation;
