import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const entriesData = [
  {
    id: 1,
    status: 'Burnout',
    statusBg: 'bg-[#F9E8E8]',
    statusColor: '#D9534F',
    statusTextClass: 'text-[#D9534F]',
    statusIcon: 'alert-triangle',
    description: "I've been feeling overwhelmed with deadlines. The pressure at work is relentless and I barely slept last night. Everything feels like too...",
    date: '09-06-2026',
    sentiment: '-0.72',
    sentimentColor: 'text-[#D9534F]'
  },
  {
    id: 2,
    status: 'At risk',
    statusBg: 'bg-[#FFF6E5]',
    statusColor: '#F5A623',
    statusTextClass: 'text-[#F5A623]',
    statusIcon: 'activity',
    description: "I've been feeling overwhelmed with deadlines. The pressure at work is relentless and I barely slept last night. Everything feels like too...",
    date: '09-06-2026',
    sentiment: '-0.72',
    sentimentColor: 'text-[#D9534F]'
  }
];

export default function RecentEntries() {
  return (
    <View className="bg-[#F8F8F8] border border-gray-200 rounded-2xl mx-4 p-4 mt-2 mb-6">
      <Text className="text-base text-gray-800 font-medium mb-4">
        Recent Journal Entries
      </Text>
      
      {/* Divider */}
      <View className="h-[1px] bg-gray-200 mb-4 -mx-4" />

      {entriesData.map((entry, index) => (
        <View 
          key={entry.id} 
          className={`flex-row items-start ${index !== entriesData.length - 1 ? 'mb-6' : ''}`}
        >
          {/* Left Column: Badge */}
          <View className="w-24 mr-3 items-start pt-1">
            <View className={`flex-row items-center px-2 py-1.5 rounded-full ${entry.statusBg}`}>
              <Feather name={entry.statusIcon} size={12} color={entry.statusColor} style={{ marginRight: 4 }} />
              <Text className={`text-[10px] font-bold ${entry.statusTextClass}`}>{entry.status}</Text>
            </View>
          </View>

          {/* Right Column: Content */}
          <View className="flex-1">
            <Text className="text-gray-600 text-xs leading-relaxed mb-3">
              {entry.description}
            </Text>
            <View className="flex-row items-center">
              <Text className="text-gray-400 text-[11px]">{entry.date}</Text>
              <Text className={`text-[11px] font-medium ml-4 ${entry.sentimentColor}`}>
                sentiment: {entry.sentiment}
              </Text>
            </View>
          </View>

        </View>
      ))}
    </View>
  );
}
