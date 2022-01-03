import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import Img from '../../../assets/images/logo1.png';
import CustomButton from '../../components/custombutton/CustomButton';
import CustomInput from '../../components/CustomInput';
import SocialMediaLogin from '../../components/socialLogin\'s/SocialMediaLogin';
const SignInScreen = ({navigation}) => {
    const { height } = useWindowDimensions();
    const naviga = useNavigation();
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const onUserNameChange = value => {
        setUserName(value);
    };
    const onPasswordChange = value => {
        setPassword(value);
    };
    return (
        <ScrollView>
        <View style={styles.container}>
            <Image
                source={Img}
                style={styles.logo, { height: height * 0.2 }}
                resizeMode="contain"
            />
            <CustomInput
                placeholder="userName"
                value={userName}
                setValue={onUserNameChange}
            />
            <CustomInput
                placeholder="password"
                // value={password}
                setValue={onPasswordChange}
            secureTextEntry
            />
            <CustomButton 
            onPress = {() => naviga.navigate('emailConfirmation')} 
            btnName = "Sign In"
            // type = "PRIMARY"
            />
             <CustomButton 
             onPress = {() => navigation.navigate('forgotPassword')} 
             btnName = "Forgot Password?"  
             type = "TERTIARY"/>
             <SocialMediaLogin/>
             <CustomButton
              btnName = "Don't have an account? Create One"
              type = "TERTIARY"
              onPress = {() => navigation.navigate('register')}
              />
        </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 20
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 100
    }
})
export default SignInScreen
