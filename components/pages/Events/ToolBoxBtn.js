
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { FontFamily } from '../../styles/GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';

const ToolBoxBtn = () => {
  return (
    <Pressable style={styles.container}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.4)', 'transparent', 'transparent', 'rgba(0,0,0,0.2)']}
        locations={[0.02, 0.15, 0.75, 0.98]}
        style={styles.button}
      >
        <Image
          style={styles.arrowUp}
          source={require('../../../assets/TodoList/arrow-up.svg')}
        />
        <Text style={styles.text}>جعبه ابزار</Text>
        <Image
          style={styles.toolBoxImg}
          source={require('../../../assets/TodoList/toolbox.svg')}
        />
      </LinearGradient>
    </Pressable>
  );
};

export default ToolBoxBtn

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  button: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    height: 52,
    width: 230,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4A7F00"
  },
  text: {
    top: -1,
    fontSize: 20,
    color: "white",
    fontFamily: FontFamily.notoBold
  },
  toolBoxImg: {
    width: 37,
    height: 37
  },
  arrowUp: {
    width: 21.25,
    height: 10.625
  }
});