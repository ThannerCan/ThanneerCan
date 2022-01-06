import {StyleSheet} from 'react-native';

export const signUpScreenStyles = StyleSheet.create({
  signUpContainer: {
    alignItems: 'center',
    justifyContent:'center',
    flex: 1,
    backgroundColor: '#39bbe3',    
  },
  textColor: {
    color: '#024657',
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    fontSize:20,
    backgroundColor: '#beecfa',    
    color: '#024657',
  },
  textField:{
    height: 40,
    margin: 15,
    borderWidth: 0.5,
    padding: 10,
    width: '50%',
  }
});
