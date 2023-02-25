import React from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, TextInput } from "react-native";

export function AboutScreen({navigation}) {
        return (
        <View style={{flex: 1, paddingTop: Platform.OS === 'android' ? '10%' : 0}}>
            <View className="flex-1 bg-[#e7f4ff] items-center justify-center">
                <View style = {{width: '80%'}}>
                    <Text style={{fontWeight: 'bold'}}>
                        About Us 
                    </Text>
                </View>
            </View>
        </View>
    );
};