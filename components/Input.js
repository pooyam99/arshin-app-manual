import * as React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FontFamily } from "./styles/GlobalStyles.js";
import { LinearGradient } from "expo-linear-gradient";

const Input = ({ title, keyType, secure, mb }) => {
  return (
    <View style={styles.container(mb)}>
      <Text style={styles.title}>{title}</Text>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.2)', 'transparent']}
        locations={[0.02, 0.1]}
        style={styles.shadow}
      >
        <TextInput
          style={styles.input}
          keyboardType={keyType}
          secureTextEntry={secure}
          autoCapitalize="none"
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
    textAlign: 'right',
    height: 50,
    width: 333,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingBottom: 2.5,
    fontSize: 25,
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

export default Input;
