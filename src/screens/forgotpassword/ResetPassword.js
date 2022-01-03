import React from 'react'
import { View, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../../components/custombutton/CustomButton';
import CustomInput from '../../components/CustomInput';
const ResetPassword = ({navigation}) => {
    return (
        <View
        style = {{
            // paddingVertical : 10,
            paddingHorizontal : 10,
            backgroundColor : '#fff'
        }}
        >
            {/* <FontAwesome5 
            name = "arrow-left"
            size = {20}
            color = "#000"
            /> */}
            <View
            style = {{
                paddingHorizontal:15,
                paddingVertical  :20,
                borderWidth:0.5,
                borderColor : '#999',
                marginTop : 16,
            }}
            >
                <Text
                style = {{
                    color:'#000',
                    opacity : 0.6,
                    fontSize : 17,
                    fontWeight : '800'
                }}
                >Reset Your Password
                </Text>
                <Text
                style = {{
                    marginTop: 12,
                    color : '#000',
                    opacity : 0.4,
                    fontSize : 14.4,
                    fontWeight : '800'
                }}
                >
                    Confirmation Code *
                    </Text>
                <CustomInput 
                placeholder = "Enter your confirmation code"
                />
                <Text
                  style = {{
                    // marginTop: 5,
                    color : '#000',
                    opacity : 0.4,
                    fontSize : 14.4,
                    fontWeight : '800'
                }}
                >Password *</Text>
                <CustomInput
                placeholder = "Enter your new password"
                />
                <CustomButton
                btnName = "Submit"
                bgcolor = 'orange'
                />
                <Text
                style = {{
                    textAlign : 'center',
                    paddingTop : 6,
                    color :'orange',
                    fontWeight : '600'
                }}
                onPress = {() => navigation.navigate('login')}
                >Back to Sign In</Text>
            </View>
        </View>
    )
}

export default ResetPassword
