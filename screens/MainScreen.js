import React from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';

//screens
import {ProfileScreen} from './ProfileScreen';
import {MessagingScreen} from './MessagingScreen';
import {OrderScreen} from './OrderScreen';
import {ScanScreen} from './ScanScreen';
import {SettingsScreen} from './SettingsScreen';
import { color } from 'react-native-elements/dist/helpers';

const Tab = createMaterialBottomTabNavigator();

export function MainScreen({navigation}) {
        return (
            <Tab.Navigator
                initialRouteName="Profile"
                activeColor="#015D82"
                labelStyle={{ fontSize: 10 }}
                barStyle={{ backgroundColor: '#fff' }}>
                    <Tab.Screen
                        name="ProfileScreen"
                        component={ProfileScreen}
                        options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-person" color={'#015D82'} size={20}/>
                        ),
                        //tabBarColor: 'white'
                    }}/>
                    <Tab.Screen
                        name="MessagingScreen"
                        component={MessagingScreen}
                        options={{
                        tabBarLabel: 'Message',
                        tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-chatbubble-ellipses-sharp" color={'#015D82'} size={20}/>
                        ),
                        //tabBarColor: '#fff'
                    }}/>
                    <Tab.Screen
                        name="OrderScreen"
                        component={OrderScreen}
                        options={{
                        tabBarLabel: 'Order',
                        tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-duplicate" color={'#015D82'} size={20}/>
                        ),
                        //tabBarColor: '#fff'
                    }}/>
                    <Tab.Screen
                        name="ScanScreen"
                        component={ScanScreen}
                        options={{
                        tabBarLabel: 'Scan',
                        tabBarIcon: ({ color }) => (
                        <Ionicons name="scan-sharp" color={'#015D82'} size={20}/>
                        ),
                        //tabBarColor: '#fff'
                    }}/>
                    <Tab.Screen
                        name="SettingsScreen"
                        component={SettingsScreen}
                        options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color }) => (
                        <Ionicons name="settings" color={'#015D82'} size={20}/>
                        ),
                        //tabBarColor: '#fff'
                    }}/>
            </Tab.Navigator>
    );
};