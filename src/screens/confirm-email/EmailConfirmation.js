import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from '../../components/custombutton/CustomButton'
import CustomInput from '../../components/CustomInput'

const EmailConfirmation = () => {
    const [emailCode,setEmailCode] = React.useState('');
    return (
        <View
        style = {{
            width:'100%',
            padding:20
        }}
        >
            <Text
            style = {{
                fontSize : 18,
                color:'#4765A9',
                fontWeight:'bold',
                textAlign:'center'
            }}
            >Confirm Your Email</Text>
            <CustomInput
             placeholder = " Enter Your Confirmation Code"
             value = {emailCode}
             setValue = {value => setEmailCode(value)}
            />
            <CustomButton
            btnName = "Confirm"
            />
            <CustomButton
            btnName = "Resend Code"
            type = "SECONDARY"
            />
            <CustomButton
             btnName = "Back to Sign In"
             type = "TERTIARY"
             /> 
        </View>
    )
}

export default EmailConfirmation
