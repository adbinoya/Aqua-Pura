import React from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, TextInput } from "react-native";

export function SettingsScreen({navigation}) {
        return (
        <View style={{flex: 1, paddingTop: Platform.OS === 'android' ? '10%' : 0}}>
            <View className="flex-1 bg-[#e7f4ff] items-center justify-center">
                <View style = {{width: '80%'}}>

                </View>
                <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')} className="flex-2 items-center">
                    <Text className="font-bold text-base text-white bg-sky-800 rounded-xl text-center px-8 py-2.5 mb-10">About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PromoScreen')} className="flex-2 items-center">
                    <Text className="font-bold text-base text-white bg-sky-800 rounded-xl text-center px-8 py-2.5 mb-10">Promos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('TrackingScreen')} className="flex-2 items-center">
                    <Text className="font-bold text-base text-white bg-sky-800 rounded-xl text-center px-8 py-2.5 mb-10">Track delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')} className="flex-2 items-center">
                    <Text className="font-bold text-base text-white bg-sky-800 rounded-xl text-center px-8 py-2.5 mb-10">Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};