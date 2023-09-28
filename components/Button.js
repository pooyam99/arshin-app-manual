import * as React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily } from "./GlobalStyles.js";

const Button = ({ title, isBlue }) => {
  return (
    <Pressable>
      <View style={[styles.button, isBlue ? styles.colorBlue : styles.colorGreen]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    height: 64,
    width: 230,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  colorBlue: {
    backgroundColor: "#126ead"
  },
  colorGreen: {
    backgroundColor: "#4A7F00"
  },
  text: {
    top: -1,
    fontSize: 20,
    color: "white",
    fontFamily: FontFamily.notoBold
  },
});

export default Button;
