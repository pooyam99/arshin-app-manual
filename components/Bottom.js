import * as React from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";
import { FontFamily } from "./styles/GlobalStyles.js";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Bottom = ({ disableMiddle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Pressable style={[styles.buttonLayout, styles.red]}>
          <View style={styles.buttonContainer}>
            <Text style={[styles.textMain, styles.textBack]}>بازگشت</Text>
            <Image
              style={styles.back}
              contentFit="cover"
              source={require("../assets/Back.svg")}
            />
          </View>
        </Pressable>
        <Pressable style={[styles.buttonLayout, styles.purple(disableMiddle)]}>
          <View style={styles.buttonContainerPurple}>
            <Text style={[styles.textMain, styles.textArrow]}>موقعیت فعلی</Text>
            <Image
              style={styles.arrow}
              contentFit="cover"
              source={require("../assets/Arrow-Up.svg")}
            />
          </View>
        </Pressable>
        <Pressable style={[styles.buttonLayout, styles.blue(disableMiddle)]}>
          <View style={styles.buttonContainer}>
            <Text style={[styles.textMain, styles.textGuide]}>راهنما</Text>
            <Image
              style={styles.guide}
              contentFit="cover"
              source={require("../assets/Question.svg")}
            />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: screenHeight - 53,
  },
  content: {
    flexDirection: "row",
  },
  textMain: {
    fontSize: 17,
    fontFamily: FontFamily.notoBold,
    color: "white",
  },
  textBack: {
    marginLeft: 8,
    marginTop: 3,
  },
  textArrow: {
    fontSize: 14,
  },
  textGuide: {
    marginLeft: 18,
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: "row"
  },
  buttonContainerPurple: {
    flexDirection: "column-reverse",
    alignItems: "center",
    marginTop: -14,
  },
  buttonLayout: {
    borderRadius: 10,
    height: 43,
    width: 99,
    shadowRadius: 4,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    }
  },
  red: {
    backgroundColor: "#cb0f31",
    left: 17
  },
  purple: (disableMiddle) => ({
    left: screenWidth - 359,
    alignSelf: "center",
    height: 38,
    width: 107,
    backgroundColor: "#9025B6",
    display: disableMiddle ? "none" : "flex"
  }),
  blue: (disableMiddle) => ({
    backgroundColor: "#1b90d2",
    left: disableMiddle ? screenWidth - 215 : screenWidth - 322
  }),
  back: {
    height: 16,
    width: 17,
    top: 3,
    marginLeft: 4,
    marginTop: 11,
  },
  arrow: {
    height: 51,
    width: 51,
    marginBottom: -28
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