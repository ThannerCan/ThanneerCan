import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './home-screen/HomeScreen';
import SignUpScreen from './sign-up/SignUpScreen';
import SplashScreen from './splash-screen/SplashScreen';
import CustomerProfile from './profile/CustomerProfile';
import DealerProfile from './profile/DealerProfile';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DealerProfile"
          component={DealerProfile}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CustomerProfile"
          component={CustomerProfile}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default Navigation;
