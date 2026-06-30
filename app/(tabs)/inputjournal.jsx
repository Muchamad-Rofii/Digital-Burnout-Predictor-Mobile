import React, { useState } from 'react';
import { View, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopNavbar from '../../components/Navigation/TopNavbar';
import BottomTabBar from '../../components/Navigation/BottomTabBar';
import JournalHeader from '../../components/Journal/JournalHeader';
import JournalInputCard from '../../components/Journal/JournalInputCard';
import JournalActions from '../../components/Journal/JournalActions';

export default function InputJournal() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Helper function to get today's date in DD/MM/YYYY
  const getTodayDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      Alert.alert('Error', 'Harap isi judul dan jurnal Anda');
      return;
    }
    
    console.log({
      title,
      content,
      date: getTodayDate()
    });
    
    // Clear input
    setTitle('');
    setContent('');
    Alert.alert('Success', 'Jurnal berhasil disimpan!');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <View className="px-4">
          <TopNavbar />
        </View>
        
        <ScrollView 
          contentContainerClassName="flex-grow px-4 pb-24 pt-2"
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Molekul: Header Khusus Jurnal */}
          <JournalHeader 
            title="Daily Journal Entry" 
            subtitle="Documenting your emotions and daily moments." 
          />

          {/* Organisme: Card Form Jurnal */}
          <JournalInputCard 
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
          />

          {/* Molekul: Aksi Tombol & Tanggal */}
          <JournalActions 
            onSubmit={handleSubmit}
            dateString={getTodayDate()}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      
      {/* Bottom Navigation */}

    </SafeAreaView>
  );
}
