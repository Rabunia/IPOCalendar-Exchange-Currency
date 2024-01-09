// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import IPOCalendarScreen from './screens/IPOCalendarScreen';
import ExchangeRatesScreen from './screens/ExchangeRatesScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IPOCalendar" component={IPOCalendarScreen} />
        <Stack.Screen name="ExchangeRates" component={ExchangeRatesScreen} />
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false, // Hide the header for the login screen
          }}
        >
          {(props) => <LoginScreen {...props} onLogin={() => setIsLoggedIn(true)} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
