import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Stack, useRouter } from 'expo-router'; 
import '../global.css';
import * as SecureStore from 'expo-secure-store';

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await SecureStore.getItemAsync('userToken');
        
        // Pengecekan hanya jalan 1x saat aplikasi dibuka.
        // Jika token sudah ada, langsung lempar ke Dashboard.
        if (token) {
          router.replace('/(tabs)/home');
        }
      } catch (error) {
        console.log("Gagal membaca token:", error);
      } finally {
        setIsReady(true);
      }
    };

    checkLoginStatus();
  }, []); // <-- KUNCI UTAMANYA: Dependency array KOSONG. 

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9fafb' }}>
        <ActivityIndicator size="large" color="#276749" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="Login/index" />
      <Stack.Screen name="Register/register" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}