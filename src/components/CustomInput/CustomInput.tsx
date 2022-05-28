import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const CustomInput = (props: any) => {
  const {placeholder, secureTextEntry, value, setValue} = props;
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={setValue}
        value={value}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginVertical: 5,
    width: '100%',
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderRadius: 5,
  },
  input: {},
});
