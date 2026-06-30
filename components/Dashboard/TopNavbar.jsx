import React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
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

      {/* 2. Search Box */}
      <View className="flex-1 flex-row items-center bg-[#F4F4F4] border border-[#E4E7EC] rounded-full px-3 h-[40px] mx-3">
        <Feather name="search" size={18} color="#666" />
        <TextInput
          placeholder="Search..."
          className="flex-1 ml-2 text-sm text-black"
          placeholderTextColor="#666"
        />
      </View>

      {/* 3. Notification Icon */}
      <TouchableOpacity className="w-[40px] h-[40px] bg-[#F4F4F4] border border-[#E4E7EC] rounded-full justify-center items-center">
        <Feather name="bell" size={18} color="#276749" />
      </TouchableOpacity>

    </View>
  );
}