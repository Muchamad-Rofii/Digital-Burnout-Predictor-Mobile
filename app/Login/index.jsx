import React from 'react';
import { View, Image } from 'react-native';
import SafeKeyboardAreaView from '../../components/ui/SafeKeyboardAreaView';
import LoginForm from '../../components/forms/LoginForm';

export default function LoginScreen() {
  return (
    <SafeKeyboardAreaView>
      <View className="items-center justify-center w-full mt-10 mb-8">
        <Image 
          source={require('../../assets/images/project-Mood-Lens/transparent-logo-1.png')} 
          className="w-15 h-11" 
          resizeMode="contain"
        />
      </View>
      
      <LoginForm />
    </SafeKeyboardAreaView>
  );
}
