import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";
import { FontFamily } from "../styles/GlobalStyles.js";
import Input from "../Input.js";
import ActionBtn from "../ActionBtn.js";
import Bottom from "../Bottom.js";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Login = () => {
  return (
    <KeyboardAvoidingView enabled={false} style={styles.container}>
      <View style={styles.login}>
        <ImageBackground
          style={styles.bg}
          source={require("../../assets/Login-BG.jpg")}
        />
        <View style={styles.topBox}>
          <Image
            style={styles.brain1}
            contentFit="cover"
            source={require("../../assets/Brain-Login-1.png")}
          />
          <Text style={styles.textTop}>{`لطفاً وارد حساب کاربری\nخود شوید`}</Text>
          <View style={styles.separator1} />
        </View>
        <View style={styles.midBox}>
          <Input title={"شماره تلفن همراه"} keyType={"number-pad"} secure={false} />
          <Input title={"رمز عبور"} keyType={"default"} secure={true} />
          <ActionBtn title={"ورود"} />
          <View style={styles.separator2}>
            <View style={styles.separator2child} />
            <Text style={[styles.textTop, { top: -15, fontSize: 24 }]}>یا</Text>
            <View style={styles.separator2child} />
          </View>
        </View>
        <View style={styles.bottomBox}>
          <View style={styles.altLogin}>
            <Pressable>
              <Image
                style={styles.googleLogo}
                contentFit="cover"
                source={require("../../assets/Google-Logo.svg")}
              />
            </Pressable>
            <Pressable>
              <Image
                style={styles.appleLogo}
                contentFit="cover"
                source={require("../../assets/Apple-Logo.svg")}
              />
            </Pressable>
          </View>
          <View style={styles.forgot}>
            <Image
              style={styles.brain2}
              contentFit="cover"
              source={require("../../assets/Brain-Login-2.png")}
            />
            <Text style={[styles.textTop, styles.textOverride]}>رمز عبور خود را فراموش کردید؟</Text>
            <Pressable>
              <Text style={styles.click}>کلیک کنید</Text>
            </Pressable>
          </View>
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
    top: -20,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  brain1: {
    width: 151,
    height: 146,
  },
  textTop: {
    fontSize: 26,
    textAlign: "center",
    lineHeight: 40,
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
  separator2: {
    marginTop: 30,
    flexDirection: "row",
  },
  separator2child: {
    marginHorizontal: 15,
    borderTopWidth: 3,
    width: 143,
    height: 3,
    borderColor: "black",
    borderStyle: "solid",
  },
  bottomBox: {
    top: 580,
    position: "absolute",
    alignItems: "center",
    flexDirection: "column",
  },
  altLogin: {
    flexDirection: "row",
  },
  appleLogo: {
    marginRight: 10,
    marginLeft: 10,
    left: 4,
    width: 34,
    height: 38,
  },
  googleLogo: {
    marginRight: 30,
    bottom: 2,
    width: 44,
    height: 44,
  },
  brain2: {
    width: 100,
    height: 90,
    marginTop: -15,
  },
  forgot: {
    alignItems: "center",
    flexDirection: "column",
  },
  textOverride: {
    fontWeight: "normal",
    fontSize: 20
  },
  click: {
    color: "#126ead",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowRadius: 4,
    fontSize: 16,
    fontFamily: FontFamily.notoBold,
    marginTop: -5,
  }
});

export default Login;
