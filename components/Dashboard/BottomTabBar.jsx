import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const tabs = [
  { id: 'home', name: 'Home', icon: 'grid', library: 'Feather', route: '/home' },
  { id: 'journal', name: 'Journal', icon: 'book', library: 'Feather', route: '/inputjournal' },
  { id: 'history', name: 'History', icon: 'history', library: 'MaterialIcons', route: '/history' },
  { id: 'profile', name: 'Profile', icon: 'user', library: 'Feather', route: '/profile' },
];

export default function BottomTabBar({ activeTab = 'home' }) {
  const router = useRouter();

  const handlePress = (tab) => {
    if (tab.id !== activeTab && tab.route) {
      router.push(tab.route);
    }
  };

  return (
    <SafeAreaView edges={['bottom']} className="absolute bottom-0 w-full bg-white border-t border-gray-200">
      <View className="flex-row items-center justify-around pb-2 pt-3 px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <TouchableOpacity 
              key={tab.id}
              onPress={() => handlePress(tab)}
              className={`items-center justify-center py-2 px-5 rounded-2xl ${isActive ? 'bg-[#E6F0EB]' : 'bg-transparent'}`}
              activeOpacity={0.7}
            >
              {tab.library === 'Feather' ? (
                <Feather 
                  name={tab.icon} 
                  size={22} 
                  color="#276749" 
                />
              ) : (
                <MaterialIcons 
                  name={tab.icon} 
                  size={24} 
                  color="#276749" 
                />
              )}
              <Text className={`text-[11px] mt-1 ${isActive ? 'font-bold text-[#276749]' : 'font-medium text-[#276749]'}`}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
