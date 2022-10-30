import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";

export function Authentication({Authentication}) {
  return (
    <View style={{flex: 1, paddingTop: Platform.OS === 'android' ? '10%' : 0}}>
        <View className="flex-1 bg-[#e7f4ff] items-center justify-center">
            <Text style = {{color: 'black'}}>Send Verification code through:</Text>
        </View>
    </View>
  )
}