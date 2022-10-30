import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from "react-native";

export function Signup({navigation}) {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#d7f4ff'}}>
              <View className="flex-1 bg-[#d7f4ff] items-center justify-center">
                <Text style = {{ 
                    color: '#015D82',
                    fontSize: 32,
                    fontWeight: 'bold',
                    paddingBottom: 30
                    }}>
                    Create Account
                </Text>
                <View style = {{width: '80%'}}>
                <TextInput 
                    placeholder = 'First Name'
                    style = {{
                        backgroundColor: 'white',
                        borderRadius: 20,
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        marginTop: 10
                    }}
                />
                <TextInput 
                    placeholder = 'Last Name'
                    style = {{
                        backgroundColor: 'white',
                        borderRadius: 20,
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        marginTop: 10
                    }}
                />
                <TextInput 
                    placeholder = 'Contact Number'
                    keyboardType = 'number-pad'
                    style = {{
                        backgroundColor: 'white',
                        borderRadius: 20,
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        marginTop: 10
                    }}
                />
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
                </View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Home')} 
                    className="flex-2 items-center">
                        <Text 
                        className = " font-bold text-base text-white bg-sky-800 rounded-xl text-center px-8 py-2.5 mb-10"
                        style = {{marginTop: 50}}>
                            Submit
                        </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}