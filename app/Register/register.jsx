import React from 'react';
import { View, Image } from 'react-native';
import SafeKeyboardAreaView from '../../components/ui/SafeKeyboardAreaView';
import RegisterForm from '../../components/forms/RegisterForm';

export default function Register() {
  return (
    <SafeKeyboardAreaView>
      <View className="items-center justify-center w-full mt-10 mb-8">
        <Image 
          source={require('../../assets/images/project-Mood-Lens/transparent-logo-1.png')} 
          className="w-15 h-11" 
          resizeMode="contain"
        />
      </View>
      
      <RegisterForm />
    </SafeKeyboardAreaView>
  );
}