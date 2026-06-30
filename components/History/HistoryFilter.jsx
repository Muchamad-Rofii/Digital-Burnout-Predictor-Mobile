import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function HistoryFilter({ activeFilter, onFilterPress }) {
  const categories = ["All", "Burnout", "At risk", "Healthy"];

  return (
    <View className="mb-6">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="px-4 items-center">
        <TouchableOpacity className="border border-gray-200 rounded-lg p-2 mr-3 bg-[#F8F8F8]">
          <Feather name="search" size={20} color="#525967" />
        </TouchableOpacity>
        
        {categories.map((cat, index) => {
          const isActive = activeFilter === cat;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => onFilterPress(cat)}
              className={`border border-gray-200 rounded-lg px-4 py-2 mr-3 ${isActive ? 'bg-[#CCD9D3]' : 'bg-[#F8F8F8]'}`}
            >
              <Text className={`text-[14px] ${isActive ? 'text-[#33483F] font-medium' : 'text-[#525967]'}`}>
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
