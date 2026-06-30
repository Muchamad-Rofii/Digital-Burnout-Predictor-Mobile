import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function HistoryCard({ data, isExpanded, onToggle, onEdit, onDelete }) {
  return (
    <View className="bg-[#F8F8F8] border border-[#E4E7EC] mb-4 overflow-hidden">
      <TouchableOpacity 
        className="flex-row items-center justify-between p-4" 
        onPress={() => onToggle(data.id)}
        activeOpacity={0.7}
      >
        <Text className="font-mono text-[#1F2937] text-[13px] w-[85px]">{data.date}</Text>
        <Text className="flex-1 text-[#1F2937] text-[14px] ml-2" numberOfLines={isExpanded ? undefined : 1}>{data.title}</Text>
        <Text className="text-[#FC5353] text-[13px] font-mono">{data.sentiment}</Text>
      </TouchableOpacity>
      
      {isExpanded && (
        <View className="px-4 pb-4">
          <Text className="text-[#1F2937] text-[14px] leading-5 mb-5">
            {data.content}
          </Text>
          
          <View className="flex-row justify-between items-center">
            {/* Actions */}
            <View className="flex-row">
              <TouchableOpacity 
                className="bg-[#F4F4F4] flex-row items-center px-3 py-1.5 rounded-lg mr-2"
                onPress={() => onEdit(data.id)}
              >
                <Feather name="edit-2" size={14} color="#525967" style={{ marginRight: 6 }} />
                <Text className="text-[#525967] text-[13px]">Edit</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                className="bg-[#F4F4F4] flex-row items-center px-3 py-1.5 rounded-lg"
                onPress={() => onDelete(data.id)}
              >
                <Feather name="trash-2" size={14} color="#525967" style={{ marginRight: 6 }} />
                <Text className="text-[#525967] text-[13px]">Delete</Text>
              </TouchableOpacity>
            </View>
            
            {/* Badges */}
            <View className="flex-row items-center">
              <View className="bg-[#FEBCBC] px-3 py-1 rounded-full mr-3">
                <Text className="text-[#8A1616] text-[12px] font-medium">{data.status}</Text>
              </View>
              <Text className="text-[#FC5353] text-[15px]">{data.percentage}</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
