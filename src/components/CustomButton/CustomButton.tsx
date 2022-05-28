import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

const CustomButton = (props: any) => {
  const {text, onPress} = props;
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'red',
    marginVertical: 5,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
