import React, { useState } from 'react';
import axios from 'axios'
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, TextInput } from "react-native";

export function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const emailHandler = (email) => {
        setEmail(email);
    }
    const passwordHandler = (password) => {
        setPassword(password);
    }

    //URL
    const baseUrl = "http://192.168.1.59:8000";

    const Login = async (event) => {
        if (!email.trim()) {
          alert("Required email.");
          return;
        }
        if (!password.trim()) {
            alert("Required password.");
            return;
        }
        setIsLoading(true);
        try {
          const response = await axios.post(`${baseUrl}/api/v1/login`, {
            email: email,
            password: password,
         });
          if (response.status === 200) {
            alert(`You are Login!`);
            navigation.navigate('MainScreen')
            setIsLoading(false);
          } else {
            throw new Error("An error has occurred");
          }
        } catch (error) {
          alert(error);
          setIsLoading(false);
        }
    };

        return (
        <View style={{flex: 1, paddingTop: Platform.OS === 'android' ? '10%' : 0}}>
            <View className="flex-1 bg-[#e7f4ff] items-center justify-center">
                <Text style = {{ 
                    color: '#015D82',
                    fontSize: 36,
                    fontWeight: 'bold',
                    letterSpacing: 2
                    }}>
                    Welcome back
                </Text>
                <Text>
                    TEST
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
                    onChangeText ={emailHandler}

                />
                <TextInput 
                    placeholder = 'Password'
                    style = {{
                        backgroundColor: 'white',
                        borderRadius: 20,
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        marginTop: 10
                    }}
                    onChangeText ={passwordHandler}

                />
                <Text style = {{
                    color: '#0477A7',
                    textDecorationLine: 'underline',
                    paddingBottom: 50,
                    marginTop: 10
                }}>Forgot Password?</Text>
                </View>
                <TouchableOpacity onPress={Login} className="flex-2 items-center">
                    <Text className="font-bold text-base text-white bg-sky-800 rounded-xl text-center px-8 py-2.5 mb-10">Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};