import React from 'react';
import { View, Text } from 'react-native';

export default function PageTitle({ title, subtitle }) {
  return (
    <View className="mt-4 mb-6">
      <Text className="text-3xl font-bold text-[#1F2937] mb-1">
        {title}
      </Text>
      {subtitle && (
        <Text className="text-sm text-[#6B7280]">
          {subtitle}
        </Text>
      )}
    </View>
  );
}