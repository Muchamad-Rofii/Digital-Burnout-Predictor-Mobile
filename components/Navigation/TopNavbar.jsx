import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Feather punya icon search & bell yang lebih clean (mirip desain lu)

export default function TopNavbar() {
  return (
    // Container utama menggunakan flex-row agar sejajar horizontal
    <View className="flex-row items-center justify-between bg-white pt-2 pb-4">
      
      {/* 1. Logo Mood Lens */}
      <Image
        source={require('../../assets/images/project-Mood-Lens/transparent-logo-1.png')}
        className="w-[125px] h-[30px]"
        resizeMode="contain"
      />


      {/* 3. Notification Icon */}
      <TouchableOpacity className="w-[40px] h-[40px] bg-[#F4F4F4] border border-[#E4E7EC] rounded-full justify-center items-center">
        <Feather name="bell" size={18} color="#276749" />
      </TouchableOpacity>

    </View>
  );
}