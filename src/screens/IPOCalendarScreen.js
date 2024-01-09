// screens/IPOCalendarScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const IPOCalendarScreen = () => {
  const [upcomingIPOs, setUpcomingIPOs] = useState([]);

  useEffect(() => {
    // Fetch upcoming IPOs from API
    axios.get('https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=pk_020906430b28428f89ff97a5f5e67a7b')
      .then(response => {
        setUpcomingIPOs(response.data);
      })
      .catch(error => {
        console.error('Error fetching upcoming IPOs:', error);
      });
  }, []);

  return (
    <View>
      <Text>IPO Calendar</Text>
      <ul>
        {upcomingIPOs.map((ipo, index) => (
          <Text key={index}>{ipo.company} - {ipo.date}</Text>
        ))}
      </ul>
    </View>
  );
};

export default IPOCalendarScreen;
