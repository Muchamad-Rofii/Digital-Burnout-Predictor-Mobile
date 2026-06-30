import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function JournalActions({ onSubmit, dateString }) {
  return (
    <View className="flex-row justify-start items-center">
      <TouchableOpacity 
        className="bg-[#EFF3F1] rounded-full flex-row items-center px-4 py-2 mr-3"
        onPress={onSubmit}
        activeOpacity={0.7}
      >
        <Feather name="save" size={18} color="#00642B" style={{ marginRight: 6 }} />
        <Text className="text-[#525967] font-medium text-[14px]">Submit</Text>
      </TouchableOpacity>

      <View className="bg-[#EFF3F1] rounded-full flex-row items-center px-4 py-2">
        <Feather name="calendar" size={18} color="#00642B" style={{ marginRight: 6 }} />
        <Text className="text-[#525967] font-medium text-[14px]">{dateString}</Text>
      </View>
    </View>
  );
}
