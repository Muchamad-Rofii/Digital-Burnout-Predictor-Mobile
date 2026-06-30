import React, { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopNavbar from '../../components/Navigation/TopNavbar';
import BottomTabBar from '../../components/Navigation/BottomTabBar';
import JournalHeader from '../../components/Journal/JournalHeader';
import HistoryFilter from '../../components/History/HistoryFilter';
import HistoryCard from '../../components/History/HistoryCard';

const dummyHistory = [
  {
    id: 1,
    date: '09-06-2026',
    title: 'Overwhelmed with deadlines',
    sentiment: '-0.65',
    content: "I've been feeling overwhelmed with deadlines lately. The pressure at work has been relentless, and it seems like every time I finish one task, several more pop up.",
    status: 'Burnout',
    percentage: '84%',
  },
  {
    id: 2,
    date: '09-06-2026',
    title: 'Regular Thursday',
    sentiment: '-0.65',
    content: "Just a regular Thursday. Nothing much happened, but I'm feeling a bit tired from the week.",
    status: 'At risk',
    percentage: '40%',
  },
  {
    id: 3,
    date: '09-06-2026',
    title: 'Overwhelmed with deadlines',
    sentiment: '-0.65',
    content: "Feeling the same pressure again today...",
    status: 'Burnout',
    percentage: '80%',
  },
  {
    id: 4,
    date: '09-06-2026',
    title: 'Overwhelmed with deadlines',
    sentiment: '-0.65',
    content: "Still feeling it...",
    status: 'Burnout',
    percentage: '82%',
  },
  {
    id: 5,
    date: '09-06-2026',
    title: 'Overwhelmed with deadlines',
    sentiment: '-0.65',
    content: "A little better today, but still a lot of work.",
    status: 'At risk',
    percentage: '65%',
  }
];

export default function HistoryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(1);

  const handleFilterPress = (kategori) => {
    setActiveFilter(kategori);
  };

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const handleEdit = (id) => {
    console.log('Edit pressed for id:', id);
    Alert.alert('Edit Action', `Edit journal id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log('Delete pressed for id:', id);
    Alert.alert('Delete Action', `Delete journal id: ${id}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4">
        {/* Header - Asumsi showSearch props bisa dipakai / tidak merusak styling Navbar default */}
        <TopNavbar showSearch={false} />
      </View>
      
      <ScrollView 
        contentContainerClassName="pb-24 pt-2"
        showsVerticalScrollIndicator={false}
      >
        <View className="px-4">
          <JournalHeader 
            title="Daily Journal History" 
            subtitle="Documenting your emotions and daily moments." 
          />
        </View>

        <HistoryFilter 
          activeFilter={activeFilter} 
          onFilterPress={handleFilterPress} 
        />

        <View className="px-4">
          {dummyHistory.map((item) => (
            <HistoryCard
              key={item.id}
              data={item}
              isExpanded={expandedId === item.id}
              onToggle={toggleExpand}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </View>
      </ScrollView>

      {/* Navigasi Bawah */}

    </SafeAreaView>
  );
}
