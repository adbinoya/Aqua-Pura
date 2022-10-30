import React from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, TextInput } from "react-native";

export function Login({navigation}) {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#d7f4ff'}}>
              <View className="flex-1 bg-[#d7f4ff] items-center justify-center">
                <Text style = {{ 
                    color: '#015D82',
                    fontSize: 36,
                    fontWeight: 'bold',
                    letterSpacing: 2
                    }}>
                    Welcome back
                </Text>
                <Text style = {{
                    color: '#0477A7',
                    fontSize: 14,
                    paddingBottom: 50
                    }}>
                    Log in to your account
                </Text>
                <View style = {{width: '80%'}}>
                <TextInput 
                    placeholder = 'Email'
                    style = {{
                        backgroundColor: 'white',
                        borderRadius: 20,
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        marginTop: 10
                    }}
                />
                <TextInput 
                    placeholder = 'Password'
                    secureTextEntry
                    style = {{
                        backgroundColor: 'white',
                        borderRadius: 20,
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        marginTop: 10
                    }}
                />
                <Text style = {{
                    color: '#0477A7',
                    textDecorationLine: 'underline',
                    paddingBottom: 50
                }}>Forgot Password?</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} className="flex-2 items-center">
                    <Text className="font-bold text-base text-white bg-sky-800 rounded-xl text-center px-8 py-2.5 mb-10">Log in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}