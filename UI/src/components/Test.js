
import React from 'react';
import {
  Button,
  StyleSheet,
  Text, View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


const Test = () => {
const state = useSelector(state => state.testRedux)
const dispatch = useDispatch()

const handlePressEvent = () => {
    console.log(state)
  dispatch({ type:'TEST'})
  console.log(state)

};
console.log(state)

  return (
    <View>
      <Text>Going To  a Screen</Text>
      <Button title='Dispatch' onPress={handlePressEvent}>

      </Button>
    </View>
  );
};

export default Test;
