import { StyleSheet, Text, View } from 'react-native'
import { Image } from "expo-image";
import React from 'react'

const ProfileInfo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.blueLeft}
        contentFit="cover"
        source={require("../assets/TodoList/vector-77.svg")}
      />
      <Image
        style={styles.blueOutlineLeft}
        contentFit="cover"
        source={require("../assets/TodoList/vector-79.svg")}
      />
      <Image
        style={styles.whiteLeftTop}
        contentFit="cover"
        source={require("../assets/TodoList/vector-81.svg")}
      />
      <Image
        style={styles.whiteLeftMiddle}
        contentFit="cover"
        source={require("../assets/TodoList/vector-83.svg")}
      />
      <Image
        style={styles.whiteLeftBottom}
        contentFit="cover"
        source={require("../assets/TodoList/vector-84.svg")}
      />
      <Image
        style={styles.blueRight}
        contentFit="cover"
        source={require("../assets/TodoList/vector-86.svg")}
      />
      <Image
        style={styles.blueOutlineRight}
        contentFit="cover"
        source={require("../assets/TodoList/vector-87.svg")}
      />
      <Image
        style={styles.whiteRightTop}
        contentFit="cover"
        source={require("../assets/TodoList/vector-88.svg")}
      />
      <Image
        style={styles.whiteRightMiddle}
        contentFit="cover"
        source={require("../assets/TodoList/vector-89.svg")}
      />
      <Image
        style={styles.whiteRightBottom}
        contentFit="cover"
        source={require("../assets/TodoList/vector-90.svg")}
      />
      <Image
        style={styles.pfpOutline}
        contentFit="cover"
        source={require("../assets/TodoList/ellipse-252.svg")}
      />
      <Image
        style={styles.pfpBG}
        contentFit="cover"
        source={require("../assets/TodoList/ellipse-253.svg")}
      />
      <Image
        style={styles.pfpAvatar}
        contentFit="cover"
        source={require("../assets/TodoList/et-profile-male.svg")}
      />
    </View>
  )
}

export default ProfileInfo

const styles = StyleSheet.create({
  container: {
    top: 33,
    left: 30,
    width: 352,
    height: 129,
    position: "absolute",
  },
  blueLeft: {
    width: 166,
    height: 124,
    position: "absolute",
  },
  blueOutlineLeft: {
    height: 117,
    width: 263,
    left: 8,
    top: 4,
    position: "absolute",
  },
  blueRight: {
    width: 166,
    height: 124,
    left: 185,
    position: "absolute",
  },
  blueOutlineRight: {
    height: 117,
    width: 263,
    left: 81,
    top: 4,
    position: "absolute",
  },
  whiteLeftTop: {
    height: 33,
    width: 120,
    left: 8,
    top: 4,
    position: "absolute",
  },
  whiteLeftMiddle: {
    height: 39,
    width: 127,
    left: 29,
    top: 39,
    position: "absolute",
  },
  whiteLeftBottom: {
    height: 44,
    width: 101,
    left: 55,
    top: 76,
    position: "absolute",
  },
  whiteRightTop: {
    height: 33,
    width: 120,
    left: 223,
    top: 4,
    position: "absolute",
  },
  whiteRightMiddle: {
    height: 39,
    width: 127,
    left: 195,
    top: 39,
    position: "absolute",
  },
  whiteRightBottom: {
    height: 44,
    width: 101,
    left: 196,
    top: 77,
    position: "absolute",
  },
  pfpOutline: {
    top: 69,
    left: 148,
    height: 60,
    width: 57,
    position: "absolute",
  },
  pfpBG: {
    top: 72,
    left: 150,
    width: 53,
    height: 55,
    position: "absolute",
  },
  pfpAvatar: {
    top: 82,
    left: 159,
    width: 35,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  }
})