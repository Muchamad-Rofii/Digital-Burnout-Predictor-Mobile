import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, Image, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';

const USERNAME = "admin";
const PASSWORD = "password123";

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Peringatan', 'Form tidak boleh kosong.');
      return;
    }
    
    setIsLoading(true);
    // test data dummy

    try {
      if (email === USERNAME && password === PASSWORD) {
        router.replace('/home');
      }
    } finally {
      setIsLoading(false);
    }

    // try {
    //   const API_URL = 'http://192.168.100.18:5000/v1/login'; 
      
    //   const response = await axios.post(API_URL, {
    //     username: email, // Ingat trik ini, kita kirim isi email sebagai username
    //     password: password,
    //   });

    //   const token = response.data.token;
    //   if (token) {
    //     await SecureStore.setItemAsync('userToken', token);
    //     router.replace('/home'); 
    //   }
    // } catch (error) {
    //   const errorMsg = error.response?.data?.message || 'Gagal menghubungi server.';
    //   Alert.alert('Login Gagal', errorMsg);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1">
        <ScrollView contentContainerStyle={{ padding: 24 }}>
          <View className="flex-row justify-center items-center mt-10 mb-8">
          <Image 
            source={require('../assets/images/project-Mood-Lens/transparent-logo-1.png')} 
            className="w-15 h-11 mr-2" 
            resizeMode="contain"
          />
          </View>
          <View className="w-full max-w-[340px] bg-white border border-gray-300 rounded-xl p-8 shadow-sm">
            <Text className="text-[19px] font-light text-black mb-1">Welcome !</Text>
            <Text className="text-[25px] font-medium text-black mb-1">Sign in to</Text>
            <Text className="text-[16px] font-normal text-black mb-8">Lorem Ipsum is simply</Text>
            <View className="mb-4">
              <Text className="text-[16px] text-black mb-2">Email</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-4 text-black text-[14px]"
                placeholder="Enter your Email"
                placeholderTextColor="#ABABAB"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View className="mb-6">
              <Text className="text-[16px] text-black mb-2">Password</Text>
              <View className="flex-row items-center border border-gray-300 rounded-lg px-4">
                <TextInput
                  className="flex-1 py-4 text-black text-[14px]"
                  placeholder="Enter your Password"
                  placeholderTextColor="#ABABAB"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <MaterialIcons 
                    name={showPassword ? 'visibility' : 'visibility-off'} 
                    size={24} 
                    color="#000000" 
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-row items-center justify-between mb-8">
              <TouchableOpacity 
                className="flex-row items-center"
                onPress={() => setRememberMe(!rememberMe)}
              >
                <View className="w-4 h-4 border border-black items-center justify-center mr-2 bg-white">
                  {rememberMe && <MaterialIcons name="check" size={12} color="#000000" />}
                </View>
                <Text className="text-[12px] font-light text-black">Remember me</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-[12px] font-light text-gray-600">Forgot Password ?</Text>
              </TouchableOpacity>
            </View>
              <TouchableOpacity 
              className="bg-[#276749] py-4 rounded-xl items-center mt-6 mb-4"
              onPress={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text className="text-white font-bold text-base">Login</Text>
              )}
            </TouchableOpacity>

            <View className="flex-row justify-center mt-2">
              <Text className="text-gray-500 text-sm">Don't have an Account ? </Text>
              <TouchableOpacity onPress={() => router.push('/register')}>
                <Text className="text-blue-500 font-bold text-sm">Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
