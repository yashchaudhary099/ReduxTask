// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Login from './src/Components/Screen/Login';
// import ProductCart from './src/Components/Screen/ProductCart';
// import Signup from './src/Components/Screen/Signup';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     // <AuthProvider> {/* Use AuthProvider as a wrapper */}
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{ headerShown: false }}
//           initialRouteName="Login">
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="ProductCart" component={ProductCart} />
//           <Stack.Screen name="Signup" component={Signup} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     // {/* </AuthProvider> */}
//   );
// };

// export default App;

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductCart from './src/Components/Screen/ProductCart';
import Login from './src/Components/Screen/Login'; // Import Login component
import Signup from './src/Components/Screen/Signup'; // Import Signup component
import Header from './src/Components/Header'; // Import Header component
// import { Data } from './src/Data'; // Import data file

const Stack = createNativeStackNavigator();

const App = () => {
  // State to manage cart items count

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="ProductCart"
          component={ProductCart}
          // initialParams={{setCartItemsCount}}
          options={{
            headerShown: true,
            header: () => <Header/>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
