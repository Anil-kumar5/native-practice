import React from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import Img from '../../../assets/images/logo1.png';
import CustomButton from '../../components/custombutton/CustomButton';
import CustomInput from '../../components/CustomInput';
import SocialMediaLogin from '../../components/socialLogin\'s/SocialMediaLogin';
const SignUpScreen = () => {
    const { height } = useWindowDimensions();
    const [userName, setUserName] = React.useState('');
    const[email,setEmail] = React.useState('');
    const [mobile,setMobile] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [ confirmPassword,setConfirmPassword] = React.useState('');
    let userNameReg = /[A-Z][a-z][^ 0-9]/;
    console.warn(userNameReg.test(userName))
    const onUserNameChange = value => {
        setUserName(value);
    };
    const onPasswordChange = value => {
        setPassword(value);
    };
    const onEmailChange = value => {
        setEmail(value);
    };
    const onConfirmPasswordChange = value => {
        setConfirmPassword(value);
    };
    const onRegisterHandler = () => {
     if(userNameReg.test(userName)){
         Alert.alert('success')
     }else {
         Alert.alert('no')
     }  
    }
    return (
        <ScrollView
        showsVerticalScrollIndicator = {false}
        >
        <View style={styles.container}>
            <Text
            style = {{
                fontSize : 18,
                color : '#4765A9',
                fontWeight:'bold'
            }}
            >Create an account</Text>
            <CustomInput
                placeholder="userName"
                value={userName}
                setValue={onUserNameChange}
            />
            <CustomInput
            placeholder = "Email"
            value = {email}
            setValue = {onEmailChange}
            />
             <CustomInput
            placeholder = "mobile"
            value = {mobile}
            setValue = {e => setMobile(e)}
            />
            <CustomInput
                placeholder="Password"
                value={password}
                setValue={onPasswordChange}
            secureTextEntry
            />
            <CustomInput
            placeholder = "Confirm Password"
            value = {confirmPassword}
            setValue = {onConfirmPasswordChange}
            secureTextEntry
            />
            <CustomButton 
            onPress = {onRegisterHandler} 
            btnName = "Register"
            />
             <Text style = {{
                 color:'gray',
                 marginVertical:10,
             }}>
                 By registering, you confirm that you accept our 
                 <Text style={{color:'#FDB075'}}>Terms of Use </Text>
                 and <Text style={{color:'#FDB075'}}>Privacy Policy</Text>
             </Text>
            <SocialMediaLogin/>
             <CustomButton
              btnName = "Already have an account? Sign In"
              type = "TERTIARY"
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
export default SignUpScreen
