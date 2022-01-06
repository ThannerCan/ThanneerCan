import { StyleSheet } from "react-native";

export const splashScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F6F6F6',
    },
    activityIndicator: {
      alignItems: 'center',
      height: 80,
    },
    titleText: {
      color: '#0E9FEE',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 36,
      lineHeight: 42,
      display: 'flex',
      alignItems: 'flex-end',
    },
  });
  