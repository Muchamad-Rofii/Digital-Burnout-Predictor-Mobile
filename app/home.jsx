import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// Import komponen atom
import TopNavbar from '../components/Dashboard/TopNavbar';
import PageTitle from '../components/Dashboard/PageTitle';
import StatsGrid from '../components/Dashboard/StatsGrid';
import RecentEntries from '../components/Dashboard/RecentEntries';
import RecommendationActivities from '../components/Dashboard/RecommendationActivities';
import BottomTabBar from '../components/Dashboard/BottomTabBar';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Berikan padding horizontal utama di sini, bukan di komponen atom */}
      <View className="px-4 flex-1">
        
        {/* Panggil komponen Header */}
        <TopNavbar />

        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          {/* Panggil komponen Judul */}
          <PageTitle 
            title="Dashboard" 
            subtitle="Your well being overview based on your entries" 
          />

          <View className="-mx-4">
            <StatsGrid />
          </View>
          <View className="-mx-4">
            <RecentEntries />
          </View>
          <View className="-mx-4">
            <RecommendationActivities />
          </View>
        </ScrollView>
      </View>
      <BottomTabBar />
    </SafeAreaView>
  );
}