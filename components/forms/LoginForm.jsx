import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Peringatan', 'Form tidak boleh kosong.');
      return;
    }
    
    setIsLoading(true);

    try {
      const API_URL = 'http://192.168.100.18:5000/api/auth/login'; 

      const response = await axios.post(API_URL, {
        email: email,
        password: password,
      });

      const token = response.data.token;
      if (token) {
        await SecureStore.setItemAsync('userToken', token);
        router.replace('/(tabs)/home'); 
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Gagal menghubungi server.';
      Alert.alert('Login Gagal', errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="w-full max-w-[340px] bg-white border border-gray-300 rounded-xl p-8 shadow-sm">
      <Text className="text-[19px] font-light text-black mb-1">Welcome !</Text>
      <Text className="text-[25px] font-medium text-black mb-1">Sign in to</Text>
      <Text className="text-[16px] font-normal text-black mb-8">Lorem Ipsum is simply</Text>
      
      <Input
        label="Email"
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        label="Password"
        placeholder="Enter your Password"
        value={password}
        onChangeText={setPassword}
        isPassword
      />

      <View className="flex-row items-center justify-between mb-8 mt-2">
        <TouchableOpacity 
          className="flex-row items-center"
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View className="w-4 h-4 border border-black items-center justify-center mr-2 bg-white rounded-sm">
            {rememberMe && <MaterialIcons name="check" size={12} color="#000000" />}
          </View>
          <Text className="text-[12px] font-light text-black">Remember me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-[12px] font-light text-gray-600">Forgot Password ?</Text>
        </TouchableOpacity>
      </View>

      <Button
        title="Login"
        onPress={handleLogin}
        isLoading={isLoading}
      />

      <View className="flex-row justify-center mt-2">
        <Text className="text-gray-500 text-sm">Don't have an Account ? </Text>
        <TouchableOpacity onPress={() => router.push('/Register/register')}>
          <Text className="text-blue-500 font-bold text-sm">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
