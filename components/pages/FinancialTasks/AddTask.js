import { StyleSheet, Text, View, Pressable } from 'react-native'
import { FontFamily } from '../../styles/GlobalStyles';
import { Image } from 'expo-image';
import React from 'react'

const AddTask = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image
          style={styles.addImg}
          source={require('../../../assets/TodoList/add.png')}
        />
      </Pressable>
      <Text style={styles.text}>افزودن</Text>
    </View>
  )
}

export default AddTask

const styles = StyleSheet.create({
  container: {
    height: 68,
    width: 113,
    marginTop: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addImg: {
    width: 46,
    height: 46
  },
  text: {
    fontFamily: FontFamily.notoBold,
    fontSize: 11,
    color: "#062"
  }
})