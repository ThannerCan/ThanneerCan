import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { logoutUser } from '../../../utils/AppUtils';
import { signUpScreenStyles } from '../sign-up/Styles';

const CustomerProfile = () => {
return <View>
    <Text> CustomerProfile</Text>
    <View>
        <TouchableOpacity onPress={logoutUser}>
          <Text style={signUpScreenStyles.button}>Logout</Text>
        </TouchableOpacity>
      </View>
</View>
}

export default CustomerProfile;