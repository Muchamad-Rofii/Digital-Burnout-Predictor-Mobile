import React from 'react';
import { View, Text } from 'react-native';

export default function JournalHeader({ title, subtitle }) {
  return (
    <View className="mb-6">
      <Text className="text-[25px] text-[#33483F] font-medium leading-[30px] mb-1">
        {title}
      </Text>
      <Text className="text-[15px] text-[#5C8372] font-light leading-[18px]">
        {subtitle}
      </Text>
    </View>
  );
}
