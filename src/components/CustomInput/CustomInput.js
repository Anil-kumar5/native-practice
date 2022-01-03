import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = (props) => {
    const {placeholder,value,setValue,secureTextEntry} = props;
    return (
        <View style={styles.container}>
        <TextInput 
        style = {styles.input}
        placeholder = {placeholder}
        value = {value}
        onChangeText = {setValue}
        secureTextEntry = {secureTextEntry}
        />
        </View>
    );
};
const styles = StyleSheet.create({
    container : {
   backgroundColor : 'white',
   width : '100%',
   borderWidth : 1,
   borderColor : '#e8e8e8',
   borderRadius:5,
   paddingHorizontal : 10,
   marginVertical : 10,
    }
})
export default CustomInput
