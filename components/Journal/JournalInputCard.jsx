import React from 'react';
import { View, TextInput } from 'react-native';

export default function JournalInputCard({ title, setTitle, content, setContent }) {
  return (
    <View className="flex-1 bg-[#F8F8F8] border border-[#E4E7EC] rounded-2xl mb-4 min-h-[400px]">
      <TextInput
        className="text-[25px] text-[#525967] font-light px-4 pt-4 pb-2"
        placeholder="Title your journal"
        placeholderTextColor="#525967"
        value={title}
        onChangeText={setTitle}
      />
      
      {/* Divider */}
      <View className="h-[1px] bg-[#D9D9D9] mx-4" />
      
      <TextInput
        className="flex-1 text-[16px] text-[#525967] font-light px-4 pt-4 pb-4"
        placeholder="What's on your mind?"
        placeholderTextColor="#525967"
        multiline={true}
        textAlignVertical="top"
        value={content}
        onChangeText={setContent}
      />
    </View>
  );
}
