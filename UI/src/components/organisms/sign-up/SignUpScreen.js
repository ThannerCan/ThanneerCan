import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native';
import {APP_USER_EMAIL} from '../../../constants/ApplicationConstants';
import {storeDataToAsyncStorage} from '../../../utils/AsyncStorageUtils';
import {signUpScreenStyles} from './Styles';

const SignUpScreen = () => {
  const handleSignUp = async () => {
    storeDataToAsyncStorage(APP_USER_EMAIL, 'yohara.@gmail.com');
  };
  return (
    <View style={signUpScreenStyles.signUpContainer}>
      <TextInput style={signUpScreenStyles.textField} placeholder="User Name" />
      <TextInput style={signUpScreenStyles.textField} placeholder="User Name" />
      <TextInput style={signUpScreenStyles.textField} placeholder="User Name" />
      <TextInput style={signUpScreenStyles.textField} placeholder="User Name" />
      <TextInput style={signUpScreenStyles.textField} placeholder="User Name" />
      <View>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={signUpScreenStyles.button}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
