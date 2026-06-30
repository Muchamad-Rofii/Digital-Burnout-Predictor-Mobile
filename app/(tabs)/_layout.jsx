import React from 'react';
import { Tabs } from 'expo-router';
import BottomTabBar from '../../components/Navigation/BottomTabBar';

export default function TabsLayout() {
  return (
    <Tabs 
      tabBar={(props) => <BottomTabBar {...props} />} 
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="inputjournal" />
      <Tabs.Screen name="history" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
