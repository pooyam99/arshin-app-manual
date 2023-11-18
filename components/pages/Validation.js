import React from "react";
import { ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";
import { FontFamily } from "../styles/GlobalStyles.js";
import Input from "../Input.js";
import ActionBtn from "../ActionBtn.js";
import Bottom from "../Bottom.js";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Validation = () => {
  return (
    <KeyboardAvoidingView enabled={false} style={styles.container}>
      <View style={styles.login}>
        <ImageBackground
          style={styles.bg}
          source={require("../../assets/Validation/Validation-BG.jpg")}
        />
        <View style={styles.topBox}>
          <Image
            style={styles.brain1}
            contentFit="cover"
            source={require("../../assets/Validation/Brain-Validation.png")}
          />
          <Text style={styles.textTop}>اعتبار سنجی</Text>
          <View style={styles.separator1} />
        </View>
        <View style={styles.midBox}>
          <Text style={styles.textMid}>{`لطفاً کد ارسالی را\nدر کادر زیر وارد نمایید`}</Text>
          <Input title={"کد ارسال شده"} keyType={"number-pad"} secure={false} />
          <ActionBtn green title={"ثبت کد"} />
        </View>
      </View>
      <Bottom disableMiddle />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bg: {
    flex: 1,
    width: screenWidth,
    height: screenHeight
  },
  topBox: {
    top: 5,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  brain1: {
    width: 190*0.7,
    height: 162*0.7,
  },
  textTop: {
    fontSize: 26,
    textAlign: "center",
    fontFamily: FontFamily.notoBold
  },
  separator1: {
    marginTop: 5,
    borderTopWidth: 5,
    width: 346,
    height: 5,
    borderColor: "black",
    borderStyle: "solid",
  },
  midBox: {
    top: 230,
    position: "absolute",
    alignItems: "center",
  },
  textMid: {
    fontSize: 26,
    textAlign: "center",
    fontFamily: FontFamily.notoBold,
    lineHeight: 40,
    marginVertical: 20
  },
});

export default Validation;