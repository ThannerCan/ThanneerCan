import {StyleSheet} from 'react-native';

export const homeScreenStyles = StyleSheet.create({
  titleContainer: {
    padding: 10,
    height: 86,
    background: '#F6F6F6',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 5,
  },
  dealerAvatar: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 45,
    height: 64,
  },
  customerAvatar: {
    width: 50,
    height: 50,
  },
  signUpButton: {
    position: 'relative',
  },
  buttonContainers: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
    display: 'flex',
  },
  rowButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    padding: 15,
  },
  fullButtonContainer: {
    width: '100%',
  },
  fullButton:(color) => ({
    height: 97,
    backgroundColor: color,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    margin: 10,
  }),
  button: (color) => ({
    height: 97,
    backgroundColor: color,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    margin: 10,
    width: '50%',
  }),
  numbertext: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 42,
  },
  subtitleText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 25,
  },
});
