import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function ProfileMenu({ menuItems, onMenuItemPress }) {
  return (
    <View className="mt-8 px-4">
      <Text className="text-[14px] font-semibold text-[#3E4944] tracking-[0.7px] uppercase mb-3">
        TOOLS & SETTINGS
      </Text>
      
      <View className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {menuItems.map((item, index) => {
          const isLast = index === menuItems.length - 1;
          return (
            <TouchableOpacity 
              key={item.id}
              onPress={() => onMenuItemPress(item)}
              className={`flex-row items-center p-4 ${!isLast ? 'border-b border-gray-100' : ''}`}
              activeOpacity={0.7}
            >
              {/* Icon Wrapper */}
              <View className="bg-[#F8F8F8] w-10 h-10 rounded-xl items-center justify-center mr-4">
                <Feather name={item.icon} size={20} color="#525967" />
              </View>
              
              {/* Label */}
              <Text className="flex-1 text-base text-[#0D1C2E]">{item.label}</Text>
              
              {/* Right Chevron */}
              <Feather name="chevron-right" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
