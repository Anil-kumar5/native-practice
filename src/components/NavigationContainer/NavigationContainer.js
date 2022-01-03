import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import SignUpScreen from '../../screens/SignUpScreen/SignUpScreen';
import SignInScreen from '../../screens/LoginScreen/SigninScreen';
import EmailConfirmation from '../../screens/confirm-email/EmailConfirmation';
import ResetPassword from '../../screens/forgotpassword/ResetPassword';
const Stack = createStackNavigator();
const NavigationContain = () => {
    return (
        <>
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName = "home"
            >
                <Stack.Screen name = "home" component = {SignInScreen}/>
                <Stack.Screen name = "register" component = {SignUpScreen}/>
                <Stack.Screen name = "emailConfirmation" component = {EmailConfirmation}/>
                <Stack.Screen name = "forgotPassword" component = {ResetPassword}/>
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}

export default NavigationContain
