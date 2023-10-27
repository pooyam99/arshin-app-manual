import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import ProfileInfo from '../../ProfileInfo'
import Bottom from '../../Bottom'
import Main from './Main'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const FinancialTasks = () => {
  return (
    <View style={styles.container}>
      <View style={styles.finances}>
        <ImageBackground
          style={styles.bg}
          resizeMode='stretch'
          source={require("../../../assets/FinancialTasks/FinancialTasks-BG.jpg")}
        >
          <ProfileInfo />
          <Main />
        </ImageBackground>
      </View>
      <Bottom />
    </View>
  )
}

export default FinancialTasks

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  finances: {
    flex: 1,
  },
  bg: {
    width: screenWidth,
    height: screenHeight
  },
})