import { TextInput } from '@react-native-material/core';
import React from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar } from "react-native";

export function Welcome({navigation}) {
    return (
        <View style={{flex: 1, paddingTop: Platform.OS === 'android' ? '10%' : 0, backgroundColor: '#D7F4FF'}}>
            

            {/* Main Flex div */}
                <View className="flex-1 flex-col justify-between space-y-5">

                    {/* Logo Divs */}
                        <View className="flex-col justify-center">
                            <Image className="self-center w-[85%] h-[50%]" resizeMode='stretch' source={require('../assets/logo.png')}/>
                        </View>

                    {/* Button Divs */}
                        <View className="flex-col w-[30%] justify-center m-auto">
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text className="font-bold text-base text-white bg-sky-800 rounded-xl text-center px-8 py-2.5 mb-10">Log in</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
                                <Text className="font-bold text-base text-sky-800 underline text-center mb-10">Sign up</Text>
                            </TouchableOpacity>
                        </View>
                        <Image className="self-center h-[30%]" resizeMode='stretch' source={require('../assets/water.png')}/>


                </View>


                
        </View>
    );
}

