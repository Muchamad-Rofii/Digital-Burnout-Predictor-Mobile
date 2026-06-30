import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, Image, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = () => {
    if (!email || !username || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
              className="w-15 h-10 mr-2"
              resizeMode="contain"
            />
          </View>
          <View className="w-full max-w-[340px] bg-white border border-gray-300 rounded-xl p-8 shadow-sm">
            <Text className="text-[19px] font-light text-black mb-1">Welcome !</Text>
            <Text className="text-[25px] font-medium text-black mb-1">Sign up to</Text>
            <Text className="text-[16px] font-normal text-black mb-6">Lorem Ipsum is simply</Text>
            <View className="mb-4">
              <Text className="text-[16px] text-black mb-2">Email</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-4 text-black text-[14px]"
                placeholder="Enter your email"
                placeholderTextColor="#ABABAB"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View className="mb-4">
              <Text className="text-[16px] text-black mb-2">User name</Text>
              <TextInput
                className="border border-gray-300 rounded-lg p-4 text-black text-[14px]"
                placeholder="Enter your user name"
                placeholderTextColor="#ABABAB"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />
            </View>
            <View className="mb-4">
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
            <View className="mb-8">
              <Text className="text-[16px] text-black mb-2">Confirm Password</Text>
              <View className="flex-row items-center border border-gray-300 rounded-lg px-4">
                <TextInput
                  className="flex-1 py-4 text-black text-[14px]"
                  placeholder="Confirm your Password"
                  placeholderTextColor="#ABABAB"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <MaterialIcons 
                    name={showConfirmPassword ? 'visibility' : 'visibility-off'} 
                    size={24} 
                    color="#000000" 
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity 
              className="bg-[#276749] rounded-lg py-4 items-center mb-2"
              onPress={handleRegister}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text className="text-white text-[16px] font-medium">Register</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
