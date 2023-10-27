import * as React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily } from "./styles/GlobalStyles.js";
import { LinearGradient } from "expo-linear-gradient";

const ActionBtn = ({ title, green }) => {
  return (
    <Pressable>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.4)', 'transparent', 'transparent', 'rgba(0,0,0,0.2)']}
        locations={[0.02, 0.15, 0.75, 0.98]}
        style={styles.button(green)}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: (green) => ({
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    height: 64,
    width: 230,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: green ? "#4A7F00" : "#126ead"
  }),
  text: {
    top: -1,
    fontSize: 20,
    color: "white",
    fontFamily: FontFamily.notoBold
  },
});

export default ActionBtn;
