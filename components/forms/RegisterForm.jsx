import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import axios from 'axios';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !username || !password || !confirmPassword) {
      Alert.alert('Error', 'Semua kolom wajib diisi');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Password dan Konfirmasi Password tidak cocok');
      return;
    }

    setIsLoading(true);

    try {
      const endpoint = 'http://192.168.100.18:5000/api/auth/register'; 

      const response = await axios.post(endpoint, {
        email: email,
        username: username,
        password: password
      });

      if (response.status === 200 || response.status === 201) {
        Alert.alert('Sukses', 'Registrasi berhasil!');
      }

    } catch (error) {
      console.error('Register Error:', error);
      if (error.response) {
        Alert.alert('Gagal', error.response.data.message || 'Validasi gagal di server');
      } else if (error.request) {
        Alert.alert('Error Koneksi', 'Tidak dapat terhubung ke server. Pastikan URL benar dan server menyala.');
      } else {
        Alert.alert('Error', 'Terjadi kesalahan internal pada aplikasi.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="w-full max-w-[340px] bg-white border border-gray-300 rounded-xl p-8 shadow-sm self-center">
      <Text className="text-[19px] font-light text-black mb-1">Welcome !</Text>
      <Text className="text-[25px] font-medium text-black mb-1">Sign up to</Text>
      <Text className="text-[16px] font-normal text-black mb-6">Lorem Ipsum is simply</Text>
      
      <Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        label="User name"
        placeholder="Enter your user name"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <Input
        label="Password"
        placeholder="Enter your Password"
        value={password}
        onChangeText={setPassword}
        isPassword
      />

      <Input
        label="Confirm Password"
        placeholder="Confirm your Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        isPassword
      />

      <Button
        title="Register"
        onPress={handleRegister}
        isLoading={isLoading}
      />
    </View>
  );
}
