
import React from 'react';
import {
  Button,
  StyleSheet,
  Text, View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

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
