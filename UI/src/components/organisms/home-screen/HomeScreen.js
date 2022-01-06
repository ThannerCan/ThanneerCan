import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import Customer from '../../../assets/customer.png';
import Dealer from '../../../assets/dealer.png';
import Logo from '../../../assets/logo.png';
import {
  NOTIFY_CANS_COLOR,
  PAID_CANS_COLOR,
  REQUIRED_CANS_COLOR,
  UN_PAID_CANS_COLOR,
  USED_CANS_COLOR,
} from '../../../constants/ColorCodes';
import {homeScreenStyles} from './Styles';

const HomeScreen = ({ navigation = {}}) => {
  const state = useSelector(state => state.customerInventory);

  const openDealerProfile = () => {
    navigation.push('DealerProfile');
  };

  const openCustomerProfile = () => {
    navigation.push('CustomerProfile');
  };

  return (
    <View>
      <View style={homeScreenStyles.titleContainer}>
        <TouchableOpacity onPress={openDealerProfile}>
          <Image source={Dealer} style={homeScreenStyles.dealerAvatar} />
        </TouchableOpacity>
        <Image source={Logo} style={homeScreenStyles.logo} />
        <TouchableOpacity onPress={openCustomerProfile}>
          <Image source={Customer} style={homeScreenStyles.customerAvatar} />
        </TouchableOpacity>
      </View>
      <View style={homeScreenStyles.buttonContainers}>
        <View style={homeScreenStyles.rowButtonContainer}>
          <TouchableOpacity
            style={homeScreenStyles.button(REQUIRED_CANS_COLOR)}>
            <Text style={homeScreenStyles.numbertext}>{state.reserved}</Text>
            <Text style={homeScreenStyles.subtitleText}>Reserved</Text>
          </TouchableOpacity>
          <TouchableOpacity style={homeScreenStyles.button(USED_CANS_COLOR)}>
            <Text style={homeScreenStyles.numbertext}>{state.used}</Text>
            <Text style={homeScreenStyles.subtitleText}>Used </Text>
          </TouchableOpacity>
        </View>
        <View style={homeScreenStyles.fullButtonContainer}>
          <TouchableOpacity
            style={homeScreenStyles.fullButton(UN_PAID_CANS_COLOR)}>
            <Text style={homeScreenStyles.numbertext}>{state.unpaid}</Text>
            <Text style={homeScreenStyles.subtitleText}>Unpaid</Text>
          </TouchableOpacity>
        </View>
        <View style={homeScreenStyles.rowButtonContainer}>
          <TouchableOpacity style={homeScreenStyles.button(PAID_CANS_COLOR)}>
            <Text style={homeScreenStyles.numbertext}>{state.paid}</Text>
            <Text style={homeScreenStyles.subtitleText}>Paid </Text>
          </TouchableOpacity>
          <TouchableOpacity style={homeScreenStyles.button(NOTIFY_CANS_COLOR)}>
            <Text style={homeScreenStyles.numbertext}>{state.notify}</Text>
            <Text style={homeScreenStyles.subtitleText}>Notify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
