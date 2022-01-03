import React from 'react'
import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native'

const CustomButton = (props) => {
    const { onPress, btnName, type = "PRIMARY", bgColor, fgColor,bgcolor } = props;
    return (

        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                styles[`container_${type}`],
                bgColor ? { backgroundColor: bgColor } : {},
                bgcolor ? {backgroundColor:bgcolor,opacity : 0.7} : {}
            ]}
        >
            <Text
                style={[
                    styles.btnText,
                    styles[`btnText_${type}`],
                    fgColor?{color:fgColor} : {}
                ]}
            >
                {btnName}
            </Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    container: {
        // backgroundColor : '#3871F3',
        width: '100%',
        padding: 15,
        marginVertical: 8,
        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#3871F3',
    },
    container_TERTIARY: {
    },
    container_SECONDARY : {
    borderColor : '#3871F3',
    borderWidth : 1
    },
    btnText: {
        fontWeight: 'bold',
        color: '#fff'
    },
    btnText_TERTIARY: {
        color: 'gray'
    },
    btnText_SECONDARY : {
        color : '#3871F3'
    }
})
export default CustomButton
