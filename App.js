
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NavigationContain from './src/components/NavigationContainer/NavigationContainer';
import EmailConfirmation from './src/screens/confirm-email/EmailConfirmation';
import ResetPassword from './src/screens/forgotpassword/ResetPassword';
import SignInScreen from './src/screens/LoginScreen/SigninScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      {/* <SigninScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <EmailConfirmation/> */}
      {/* <ResetPassword/> */}
      {/* <NavigationContain/> */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
        >
          <Stack.Screen name="login" component={SignInScreen} />
          <Stack.Screen name="register" component={SignUpScreen} />
          <Stack.Screen name="emailConfirmation" component={EmailConfirmation} />
          <Stack.Screen name="forgotPassword" component={ResetPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
const styles = StyleSheet.create({
});

export default App;
