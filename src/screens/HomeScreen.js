// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the App</Text>
      <Button title="IPO Calendar" onPress={() => navigation.navigate('IPOCalendar')} />
      <Button title="Exchange Rates" onPress={() => navigation.navigate('ExchangeRates')} />
    </View>
  );
};

export default HomeScreen;
