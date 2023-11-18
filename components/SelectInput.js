import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FontFamily } from "./styles/GlobalStyles.js";
import { LinearGradient } from "expo-linear-gradient";
import DropDownPicker from 'react-native-dropdown-picker';

const SelectInput = ({ title, keyType, secure, mb }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('default_user');
  const [items, setItems] = useState([
    { label: 'کاربر اصلی', value: 'default_user' },
    { label: 'مراقب', value: 'caretaker' },
  ]);

  return (
    <View style={styles.container(mb)}>
      <Text style={styles.title}>{title}</Text>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.2)', 'transparent']}
        locations={[0.02, 0.1]}
        style={styles.shadow}
      >
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.input}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (mb) => ({
    marginBottom: mb ? mb : 20
  }),
  input: {
    height: 50,
    width: 333,
    borderColor: 'transparent',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingBottom: 2.5,
    fontSize: 25,
    backgroundColor: "#D9D9D9",
  },
  shadow: {
    height: 50,
    width: 333,
    borderRadius: 25,
    backgroundColor: "#D9D9D9",
  },
  title: {
    fontSize: 20,
    fontFamily: FontFamily.notoRegular,
  },
});

export default SelectInput;
