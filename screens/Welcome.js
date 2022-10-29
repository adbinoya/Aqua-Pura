import { TextInput } from '@react-native-material/core';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";

export function Welcome({navigation}) {
    return (
        <View className="w-full h-full">
            <View className="flex-1 bg-[#d7f4ff] items-center justify-center">
                <Image className="flex-1 justify-center mt-24" resizeMode="center" source={require('../assets/logo.png')}/>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} className="flex-2 items-center">
                    <Text className="font-bold text-base text-white bg-sky-800 rounded-xl text-center px-8 py-2.5 mb-10">Log in</Text>
                    <Text className="font-bold text-base text-sky-800 underline text-center mb-10">Sign up</Text>
                </TouchableOpacity>
                <Image className="flex-1 mt-0.5" source={require('../assets/water.png')}/>
            </View>
        </View>
    );
}