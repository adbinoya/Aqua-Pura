import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";

export function Signup({navigation}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const firstNameHandler = (fname) => {
        setFirstName(fname);
    }
    const lastNameHandler = (lname) => {
        setLastName(lname);
    }
    const phoneNumberHandler = (integer) => {
        setPhoneNumber(integer);
    }
    const emailHandler = (email) => {
        setEmail(email);
    }
    const passwordHandler = (password) => {
        setPassword(password);
    }

    //URL
    const baseUrl = "http://192.168.1.59:8000";

    const Signup = async (event) => {
        // if (!firstName.trim() || !email.trim() || !firstName.trim() || !email.trim()) {
        //   alert("Name or Email is invalid");
        //   return;
        // }
        setIsLoading(true);
        try {
          const response = await axios.post(`${baseUrl}/api/v1/register`, {
            first_name: firstName,
            last_name: lastName,
            email: email,
            contact: phoneNumber,
            password: password,
         });
          if (response.status === 200) {
            alert(`You are registered!`);
            navigation.navigate('Login')
            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setEmail('');
            setPassword('');
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
              <ScrollView className="bg-[#e7f4ff] pt-[30%]">
                <View className="flex-1 flex-col justify-center items-center">
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
                            onChangeText ={firstNameHandler}
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
                            onChangeText ={lastNameHandler}
                        />
                        <TextInput 
                            placeholder = 'Phone Number'
                            keyboardType = 'number-pad'
                            style = {{
                                backgroundColor: 'white',
                                borderRadius: 20,
                                paddingHorizontal: 15,
                                paddingVertical: 10,
                                marginTop: 10
                            }}
                            onChangeText ={phoneNumberHandler}
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
                            onChangeText ={emailHandler}
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
                            onChangeText ={passwordHandler}
                        />
                        <TextInput 
                            placeholder = 'Confirm Password'
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
                                onPress={Signup}
                                className="flex-2 items-center">
                                    <Text 
                                    className = " font-bold text-base text-white bg-sky-800 rounded-xl text-center px-8 py-2.5 mb-10"
                                    style = {{marginTop: 50}}>
                                        Submit
                                    </Text>
                            </TouchableOpacity>
                        </View>
            </ScrollView>
        </View>
    );
}