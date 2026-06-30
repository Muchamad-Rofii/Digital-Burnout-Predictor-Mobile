import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export default function LogoutButton({ onLogout }) {
  return (
    <View className="items-center mt-8 mb-6">
      <TouchableOpacity 
        className="px-8 py-2 rounded-full border"
        style={{
          backgroundColor: 'rgba(255, 218, 216, 0.2)',
          borderColor: 'rgba(255, 179, 176, 0.5)'
        }}
        onPress={onLogout}
        activeOpacity={0.7}
      >
        <Text className="text-[#A83639] font-semibold text-base">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
