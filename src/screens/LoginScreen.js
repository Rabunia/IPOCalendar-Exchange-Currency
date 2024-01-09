// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform the actual login logic here
    axios.post('/api/login', { username, password })
      .then(response => {
        // Assuming your backend sends a token upon successful login
        const token = response.data.token;

        // Update state to indicate the user is logged in
        onLogin && onLogin(token);

        // Redirect to another screen or perform additional actions
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error('Login failed:', error);
        // Handle login failure (show error message, etc.)
      });
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
