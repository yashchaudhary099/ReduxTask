import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
// import {View} from 'react-native';

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cart" component={ Cart} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationContainer>
  );
};

export default StackNavigation;
