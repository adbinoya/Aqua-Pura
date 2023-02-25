import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, SafeAreaView } from 'react-native';
import { Welcome } from './screens/Welcome';
import { Login } from './screens/Login';
import { Signup } from './screens/Signup';
import { Authentication } from './screens/Authentication';
import { ProfileScreen } from './screens/ProfileScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { PromoScreen } from './screens/PromoScreen';
import { MessagingScreen } from './screens/MessagingScreen';
import { OrderScreen } from './screens/OrderScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from './screens/MainScreen';
import { AboutScreen } from './screens/AboutScreen';
import { ScanScreen } from './screens/ScanScreen';
import { TrackingScreen } from './screens/TrackingScreen';

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='Welcome' component={Welcome}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Signup' component={Signup}/>
                <Stack.Screen name='Authentication' component={Authentication}/>
                <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
                <Stack.Screen name='SettingsScreen' component={SettingsScreen}/>
                <Stack.Screen name='MessagingScreen' component={MessagingScreen}/>
                <Stack.Screen name='OrderScreen' component={OrderScreen}/>
                <Stack.Screen name='PromoScreen' component={PromoScreen}/>
                <Stack.Screen name='MainScreen' component={MainScreen}/>
                <Stack.Screen name='AboutScreen' component={AboutScreen}/>
                <Stack.Screen name='ScanScreen' component={ScanScreen}/>
                <Stack.Screen name='TrackingScreen' component={TrackingScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}