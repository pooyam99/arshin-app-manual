import * as React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FontFamily } from "./styles/GlobalStyles.js";

const Input = ({ title, keyType, secure }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        keyboardType={keyType}
        secureTextEntry={secure}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: 333,
    borderRadius: 25,
    backgroundColor: "#D9D9D9",
    paddingHorizontal: 20,
    paddingBottom: 2.5,
    fontSize: 25,
  },
  title: {
    fontSize: 20,
    fontFamily: FontFamily.notoRegular,
  },
});

export default Input;
