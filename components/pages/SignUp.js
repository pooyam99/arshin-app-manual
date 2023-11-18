import React from "react";
import { ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, Pressable, Dimensions, ScrollView } from "react-native";
import { Image } from "expo-image";
import { FontFamily } from "../styles/GlobalStyles.js";
import Input from "../Input.js";
import SelectInput from "../SelectInput.js";
import ActionBtn from "../ActionBtn.js";
import Bottom from "../Bottom.js";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const SignUp = () => {
  return (
    <KeyboardAvoidingView enabled={false} style={styles.container}>
      <View style={styles.login}>
        <ImageBackground
          style={styles.bg}
          source={require("../../assets/SignUp/SignUp-BG.jpg")}
        />
        <View style={styles.topBox}>
          <Image
            style={styles.brain1}
            contentFit="cover"
            source={require("../../assets/SignUp/Brain-SignUp.png")}
          />
          <Text style={styles.textTop}>{`لطفاً جهت ایجاد حساب کاربری\nفرم زیر را تکمیل کنید.`}</Text>
          <View style={styles.separator1} />
        </View>
        <View style={styles.midBox}>
            <SelectInput title={"نوع عضویت"} keyType={"default"} secure={false} mb />
            <Input title={"نام"} keyType={"default"} secure={false} mb />
            <Input title={"نام خانوادگی"} keyType={"default"} secure={false} mb />
            <Input title={"رمز عبور دلخواه"} keyType={"default"} secure={true} mb />
            <Input title={"سن"} keyType={"number-pad"} secure={false} mb={10} />
          <ActionBtn green title={"ثبت نام"} />
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
    width: 190 * 0.7,
    height: 162 * 0.7,
  },
  textTop: {
    fontSize: 26,
    textAlign: "center",
    fontFamily: FontFamily.notoBold,
    lineHeight: 32,
    paddingTop: 15
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
    top: 210,
    position: "absolute",
    alignItems: "center",
  },
});

export default SignUp;