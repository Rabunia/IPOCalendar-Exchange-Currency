// screens/ExchangeRatesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const ExchangeRatesScreen = () => {
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    // Fetch exchange rates from API
    axios.get('https://api.iex.cloud/v1/fx/convert?symbols=USDCAD,GBPUSD,USDJPY&amount=73&token=pk_020906430b28428f89ff97a5f5e67a7b')
      .then(response => {
        setExchangeRates(response.data);
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
      });
  }, []);

  return (
    <View>
      <Text>Exchange Rates</Text>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {exchangeRates.map((rate, index) => (
            <Text key={index}>{rate.currency} - {rate.rate}</Text>
          ))}
        </tbody>
      </table>
    </View>
  );
};

export default ExchangeRatesScreen;
