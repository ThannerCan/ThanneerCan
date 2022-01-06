import React, {useEffect, useState} from 'react';
import {Text, ActivityIndicator, Image, View} from 'react-native';
import Logo from '../../../assets/logo.png';
import {APP_USER_EMAIL} from '../../../constants/ApplicationConstants';
import {getDataFromAsyncStorage} from '../../../utils/AsyncStorageUtils';
import { splashScreenStyles } from './Styles';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  const getUserInformation = async () => {
    const value = await getDataFromAsyncStorage(APP_USER_EMAIL);
    if (navigation) {
      navigation.replace(value === null ? 'SignUpScreen' : 'HomeScreen');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      getUserInformation();
    }, 5000);
  }, []);

  return (
    <View style={splashScreenStyles.container}>
      <Image
        source={Logo}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <Text style={splashScreenStyles.titleText}>Thanneer</Text>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={splashScreenStyles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;
