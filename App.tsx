/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './android/app/src/screens/home';
import Signin from './android/app/src/screens/signin';
import Signup from './android/app/src/screens/signup';
import Product from './android/app/src/screens/Product';
import Product2 from './android/app/src/screens/Product2';
import Product3 from './android/app/src/screens/Product3';
import Product4 from './android/app/src/screens/Product4';
import Product5 from './android/app/src/screens/Product5';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
    
        <Stack.Screen name="login" component={Signin} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Product2" component={Product2} />
        <Stack.Screen name="Product3" component={Product3} />
        <Stack.Screen name="Product4" component={Product4} />
        <Stack.Screen name="Product5" component={Product5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




