import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import ProfileInfo from '../../ProfileInfo'
import Bottom from '../../Bottom'
import Main from './Main'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const TodoList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.todoList}>
        <ImageBackground
          style={styles.bg}
          resizeMode='stretch'
          source={require("../../../assets/TodoList/TodoList-BG.jpg")}
        >
          <ProfileInfo />
          <Main />
        </ImageBackground>
      </View>
      <Bottom />
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoList: {
    flex: 1,
  },
  bg: {
    width: screenWidth,
    height: screenHeight
  },
})