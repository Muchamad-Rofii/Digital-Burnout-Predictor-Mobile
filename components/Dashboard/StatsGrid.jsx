import React from 'react';
import { View, Text } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const statData = [
  {
    id: 1,
    title: 'Total Journal',
    value: '7',
    trend: '+3 this week',
    trendColorClass: 'text-[#276749]',
    trendColorHex: '#276749',
    icon: 'book-open',
    iconColor: '#276749',
    iconBgClass: 'bg-[#E6F0EB]', 
  },
  {
    id: 2,
    title: 'Burnout Probability',
    value: '78%',
    trend: '+3.45% this week',
    trendColorClass: 'text-[#D9534F]',
    trendColorHex: '#D9534F',
    icon: 'activity',
    iconColor: '#D9534F',
    iconBgClass: 'bg-[#F9E8E8]', 
    trendIcon: 'arrow-down-right'
  },
  {
    id: 3,
    title: 'Current Streak',
    value: '3 days',
    trend: 'Keep it up!',
    trendColorClass: 'text-[#276749]',
    trendColorHex: '#276749',
    icon: 'fire',
    iconColor: '#276749',
    iconBgClass: 'bg-[#E6F0EB]',
    trendIcon: 'trending-up',
    // Data ikon khusus diselundupkan di sini
    IconComponent: MaterialCommunityIcons
  },
  {
    id: 4,
    title: 'Avg Sentiment',
    value: '-0.11',
    trend: 'Declining 30d',
    trendColorClass: 'text-[#F5A623]',
    trendColorHex: '#F5A623',
    icon: 'bar-chart-2',
    iconColor: '#F5A623',
    iconBgClass: 'bg-[#FFF6E5]', 
    trendIcon: 'trending-down'
  }
];

export default function StatsGrid() {
  return (
    <View className="flex-row flex-wrap justify-between px-4 mt-4">
      {statData.map((item) => {
        
        const Icon = item.IconComponent || Feather;

        return (
          <View 
            key={item.id} 
            className="w-[48%] bg-[#F8F8F8] border border-gray-200 rounded-2xl py-5 px-3 mb-4"
          >
            <Text className="text-[14px] text-gray-600 font-semibold mb-4 text-center">
              {item.title}
            </Text>
            <View className="flex-row items-center justify-center mb-4">
              <View className={`w-10 h-10 rounded-full items-center justify-center mr-3 ${item.iconBgClass}`}>
                
                {/* RENDER KOMPONEN SECARA DINAMIS DI SINI */}
                <Icon name={item.icon} size={20} color={item.iconColor} />
                
              </View>
              <Text className="text-3xl font-bold text-gray-800">{item.value}</Text>
            </View>
            <View className="flex-row items-center justify-center">
              {item.trendIcon && (
                <Feather 
                  name={item.trendIcon} 
                  size={14} 
                  color={item.trendColorHex} 
                  style={{ marginRight: 4 }} 
                />
              )}
              <Text className={`text-[12px] font-semibold ${item.trendColorClass}`}>
                {item.trend}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}