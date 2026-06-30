import React from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

import TopNavbar from '../../components/Navigation/TopNavbar';
import BottomTabBar from '../../components/Navigation/BottomTabBar';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import ProfileMenu from '../../components/Profile/ProfileMenu';
import LogoutButton from '../../components/Profile/LogoutButton';

const menuItems = [
  { id: 1, label: "Change Password", icon: "lock" },
  { id: 2, label: "Preferences", icon: "settings" },
  { id: 3, label: "Privacy Settings", icon: "shield" },
  { id: 4, label: "Help Center", icon: "help-circle" },
];

export default function ProfilePage() {
  const router = useRouter();

  const handleEditAvatar = () => {
    console.log("Edit avatar pressed");
  };

  const handleMenuItemPress = (item) => {
    console.log("Menu item pressed:", item.label);
  };

  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Yes", 
          onPress: async () => {
            try {
              // Jika SecureStore belum di-install, fungsi ini mungkin error. 
              // Pastikan npx expo install expo-secure-store sudah dijalankan
              await SecureStore.deleteItemAsync('userToken');
              
              // Kembali ke halaman index (login)
              router.replace('/');
            } catch (error) {
              console.log("Error logging out", error);
            }
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4">
        {/* Top Navbar */}
        <TopNavbar showSearch={false} />
      </View>
      
      <ScrollView 
        contentContainerClassName="pb-24 pt-2"
        showsVerticalScrollIndicator={false}
      >
        {/* Organisme: Profile Info (Avatar + Teks) */}
        <ProfileHeader 
          name="John Doe"
          email="user@example.com"
          onEditAvatar={handleEditAvatar}
        />
        
        {/* Organisme: Tools & Settings Menu */}
        <ProfileMenu 
          menuItems={menuItems}
          onMenuItemPress={handleMenuItemPress}
        />
        
        {/* Molekul: Log Out Button */}
        <LogoutButton onLogout={handleLogout} />
      </ScrollView>

      {/* Navigasi Bawah */}

    </SafeAreaView>
  );
}
