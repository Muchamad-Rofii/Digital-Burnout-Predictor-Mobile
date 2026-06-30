import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated, TextInput, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function HistoryFilter({ activeFilter, onFilterPress }) {
  const categories = ["All", "Burnout", "At risk", "Healthy"];
  
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchWidth = useRef(new Animated.Value(42)).current; // Lebar awal kurang lebih 42px
  const inputRef = useRef(null);

  const openSearch = () => {
    setIsSearching(true);
    Animated.timing(searchWidth, {
      toValue: 200, // Lebar memanjang
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      inputRef.current?.focus();
    });
  };

  const closeSearch = () => {
    Keyboard.dismiss();
    Animated.timing(searchWidth, {
      toValue: 42, // Kembali ke lebar awal
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setIsSearching(false);
      setSearchText("");
    });
  };

  return (
    <View className="mb-6">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="px-4 items-center">
        
        {/* Animated Search Container */}
        <Animated.View 
          style={{ width: searchWidth, height: 42 }}
          className="mr-3 border border-gray-200 rounded-lg bg-[#F8F8F8] overflow-hidden flex-row items-center"
        >
          {isSearching ? (
            <>
              <View className="pl-3">
                <Feather name="search" size={18} color="#525967" />
              </View>
              <TextInput
                ref={inputRef}
                value={searchText}
                onChangeText={setSearchText}
                placeholder="Search..."
                className="flex-1 px-2 text-[14px] text-black h-full"
                placeholderTextColor="#999"
                returnKeyType="search"
                onSubmitEditing={closeSearch}
              />
              <TouchableOpacity onPress={closeSearch} className="px-3 h-full justify-center">
                <Feather name="x" size={16} color="#525967" />
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity onPress={openSearch} className="w-full h-full justify-center items-center">
              <Feather name="search" size={20} color="#525967" />
            </TouchableOpacity>
          )}
        </Animated.View>
        
        {/* Category Filters */}
        {categories.map((cat, index) => {
          const isActive = activeFilter === cat;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => onFilterPress(cat)}
              // Perubahan ada di baris ini: menambahkan lebar tetap (w-24), menghapus px-4, dan memastikan items-center
              className={`border border-gray-200 rounded-lg mr-3 h-[42px] w-24 flex items-center justify-center ${isActive ? 'bg-[#CCD9D3]' : 'bg-[#F8F8F8]'}`}
            >
              <Text className={`text-[14px] text-center ${isActive ? 'text-[#33483F] font-medium' : 'text-[#525967]'}`}>
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}