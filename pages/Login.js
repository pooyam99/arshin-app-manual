import * as React from "react";
import { ImageBackground, StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily } from "../components/GlobalStyles.js";
import Input from "../components/Input.js";
import Button from "../components/Button.js";
import Bottom from "../components/Bottom.js";

const Login = () => {
  return (
    <View style={styles.login}>
      <ImageBackground
        style={styles.bg}
        resizeMode="cover"
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
        <Input title={"شماره تلفن همراه"} key={"number-pad"} secure={false} />
        <Input title={"رمز عبور"} key={"default"} secure={true} />
        <Button title={"ورود"} isBlue={true} />
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
      <Bottom />
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    top: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  bg: {
    flex: 1,
    width: 390,
    height: 844,
  },
  topBox: {
    top: 22,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  brain1: {
    width: 151,
    height: 146,
    marginBottom: -12,
  },
  textTop: {
    fontSize: 26,
    textAlign: "center",
    lineHeight: 30,
    fontFamily: FontFamily.notoBold
  },
  separator1: {
    marginTop: 15,
    borderTopWidth: 5,
    width: 346,
    height: 5,
    borderColor: "black",
    borderStyle: "solid",
  },
  midBox: {
    top: 270,
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
    top: 620,
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
    width: 33,
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
    marginTop: -10,
    marginBottom: -5,
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
      height: 4,
    },
    textShadowRadius: 4,
    fontSize: 16,
    fontFamily: FontFamily.notoBold,
    marginTop: -5,
  }
});

export default Login;
