import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Input({ label, isPassword, ...props }) {
  const [isSecure, setIsSecure] = useState(isPassword);

  return (
    <View className="mb-4">
      {label && <Text className="text-[16px] text-black mb-2">{label}</Text>}
      <View className="flex-row items-center border border-gray-300 rounded-lg px-4 bg-white">
        <TextInput
          className="flex-1 py-4 text-black text-[14px]"
          placeholderTextColor="#ABABAB"
          secureTextEntry={isSecure}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
            <MaterialIcons
              name={isSecure ? 'visibility-off' : 'visibility'}
              size={24}
              color="#000000"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
