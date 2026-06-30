import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

export default function Button({ title, onPress, isLoading, ...props }) {
  return (
    <TouchableOpacity
      className="bg-[#276749] rounded-lg py-4 items-center mb-2"
      onPress={onPress}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text className="text-white text-[16px] font-medium">{title}</Text>
      )}
    </TouchableOpacity>
  );
}
