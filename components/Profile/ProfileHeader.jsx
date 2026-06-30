import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ProfileHeader({ name, email, avatarUrl, onEditAvatar }) {
  return (
    <View className="items-center mt-6">
      <View className="relative">
        {/* Avatar */}
        <View className="w-24 h-24 rounded-full border-4 border-white bg-gray-300 items-center justify-center overflow-hidden">
          {avatarUrl ? (
            <Image source={{ uri: avatarUrl }} className="w-full h-full" />
          ) : (
            <Feather name="user" size={40} color="#fff" />
          )}
        </View>
        
        {/* Edit Badge */}
        <TouchableOpacity 
          className="absolute bottom-0 right-0 bg-[#006C52] w-8 h-8 rounded-full items-center justify-center border-2 border-white"
          onPress={onEditAvatar}
          activeOpacity={0.8}
        >
          <Feather name="edit-2" size={14} color="#fff" />
        </TouchableOpacity>
      </View>
      
      {/* User Info */}
      <Text className="text-[32px] font-bold text-[#0D1C2E] mt-4">{name}</Text>
      <Text className="text-[16px] text-[#3E4944] mt-1">{email}</Text>
    </View>
  );
}
