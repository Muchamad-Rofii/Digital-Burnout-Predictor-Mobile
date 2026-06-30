import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const activitiesData = [
  {
    id: 1,
    title: 'Mindful Breathing',
    duration: '5 mins',
    icon: 'wind',
    iconColor: '#276749',
    iconBg: 'bg-[#E6F0EB]',
  },
  {
    id: 2,
    title: 'Guided Meditation',
    duration: '10 mins',
    icon: 'user', // representing meditation
    iconColor: '#276749',
    iconBg: 'bg-[#E6F0EB]',
  }
];

export default function RecommendationActivities() {
  return (
    <View className="bg-transparent mt-4 mb-24">
      <Text className="text-[16px] text-[#1F2937] font-bold mb-4">
        Recommendation Activities
      </Text>

      {activitiesData.map((activity) => (
        <TouchableOpacity 
          key={activity.id} 
          className="flex-row items-center bg-white border border-gray-100 rounded-2xl p-4 mb-3"
          activeOpacity={0.7}
        >
          <View className={`w-12 h-12 rounded-full items-center justify-center mr-4 ${activity.iconBg}`}>
            <Feather name={activity.icon} size={22} color={activity.iconColor} />
          </View>
          <View className="flex-1">
            <Text className="text-[15px] font-semibold text-gray-800 mb-1">
              {activity.title}
            </Text>
            <Text className="text-sm text-gray-500">
              {activity.duration}
            </Text>
          </View>
          <Feather name="chevron-right" size={20} color="#9CA3AF" />
        </TouchableOpacity>
      ))}
    </View>
  );
}
