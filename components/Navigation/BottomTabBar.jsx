import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BottomTabBar({ state, descriptors, navigation }) {
  // state.routes akan berisi rute tab (home, inputjournal, history, profile)
  // Kita map berdasarkan rute yang didaftarkan di app/(tabs)/_layout.jsx
  
  const getIconInfo = (routeName) => {
    switch (routeName) {
      case 'home':
        return { icon: 'grid', library: 'Feather', label: 'Home' };
      case 'inputjournal':
        return { icon: 'book', library: 'Feather', label: 'Journal' };
      case 'history':
        return { icon: 'history', library: 'MaterialIcons', label: 'History' };
      case 'profile':
        return { icon: 'user', library: 'Feather', label: 'Profile' };
      default:
        return { icon: 'circle', library: 'Feather', label: routeName };
    }
  };

  return (
    <SafeAreaView edges={['bottom']} className="absolute bottom-0 w-full bg-white border-t border-gray-200">
      <View className="flex-row items-center justify-around pb-2 pt-3 px-2">
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const { icon, library, label } = getIconInfo(route.name);

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity 
              key={route.key}
              onPress={onPress}
              className={`items-center justify-center py-2 px-5 rounded-2xl ${isFocused ? 'bg-[#E6F0EB]' : 'bg-transparent'}`}
              activeOpacity={0.7}
            >
              {library === 'Feather' ? (
                <Feather 
                  name={icon} 
                  size={22} 
                  color="#276749" 
                />
              ) : (
                <MaterialIcons 
                  name={icon} 
                  size={24} 
                  color="#276749" 
                />
              )}
              <Text className={`text-[11px] mt-1 ${isFocused ? 'font-bold text-[#276749]' : 'font-medium text-[#276749]'}`}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
