import * as React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily } from "./GlobalStyles.js";

const Bottom = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonLayout}>
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>بازگشت</Text>
          <Image
            style={styles.back}
            contentFit="cover"
            source={require("../assets/Back.svg")}
          />
        </View>
      </Pressable>
      <Pressable style={[styles.buttonLayout, styles.buttonOverride]}>
        <View style={styles.buttonContainer}>
          <Text style={[styles.text, styles.textOverride]}>راهنما</Text>
          <Image
            style={styles.guide}
            contentFit="cover"
            source={require("../assets/Question.svg")}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 365,
    flexDirection: "row"
  },
  text: {
    fontSize: 17,
    fontFamily: FontFamily.notoBold,
    color: "white",
    marginLeft: 9,
    marginTop: 3,
  },
  textOverride: {
    marginLeft: 18,
    marginTop: 4,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row"
  },
  buttonLayout: {
    marginHorizontal: 75,
    backgroundColor: "#cb0f31",
    borderRadius: 10,
    height: 43,
    width: 99,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    }
  },
  buttonOverride: {
    backgroundColor: "#1b90d2"
  },
  back: {
    height: 16,
    width: 17,
    top: 3,
    marginLeft: 4,
    marginTop: 11,
  },
  guide: {
    height: 23,
    width: 23,
    right: 4,
    marginLeft: 5,
    marginTop: 11,
  }
});

export default Bottom;