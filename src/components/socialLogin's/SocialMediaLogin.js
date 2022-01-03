import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from '../custombutton/CustomButton'

const SocialMediaLogin = () => {
    return (
        <>
          <CustomButton
             btnName = "Sign In With Facebook"
             bgColor = "#E7EAF4"
             fgColor = "#4765A9"
             />
             <CustomButton
             btnName = "Sign In With Google"
             bgColor = "#FAE9EA"
             fgColor = "#DD4D44"
             />
        </>
    )
}

export default SocialMediaLogin
