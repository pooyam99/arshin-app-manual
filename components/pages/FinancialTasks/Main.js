import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'
import { Image } from 'expo-image';
import { FontFamily } from '../../styles/GlobalStyles';
import ToolBoxBtn from './ToolBoxBtn';
import AddTask from './AddTask';
import Tasks from './Tasks';
import { FinanceExample } from './FinanceExample'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Main = () => {
  const [data, setData] = useState(FinanceExample)

  deleteTask = (taskId) => {
    setData(data.filter((item) => item.id !== taskId))
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0.15)', 'transparent']}
        end={{ x: 0.5, y: 0.02 }}
        style={styles.topWindow}
      >
        <View style={styles.topBox}>
          <Text style={styles.title}>امور مالی</Text>
          <Image
            source={require("../../../assets/FinancialTasks/brain-finances.png")}
            contentFit="cover"
            style={styles.brain}
          />
        </View>
      </LinearGradient>
      <LinearGradient
        colors={['rgba(0,0,0,0.1)', 'transparent']}
        end={{ x: 0.5, y: 0.1 }}
        style={styles.midWindow}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.15)', 'transparent']}
        end={{ x: 0.5, y: 0.02 }}
        style={styles.bottomWindow}
      >
        <View style={styles.bottomBox}>
          <View style={styles.taskBox}>
            <Tasks taskData={data} deleteTask={deleteTask} />
          </View>
          <AddTask />
          <ToolBoxBtn />
        </View>
      </LinearGradient>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    top: 168
  },
  topWindow: {
    flex: 1,
    backgroundColor: "rgba(0, 71, 255, 0.35)",
    height: screenHeight - 231,
    width: screenWidth,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: "absolute",
  },
  midWindow: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    top: 73,
    height: screenHeight - 231 - 73,
    width: screenWidth,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: "absolute",
    alignItems: 'center',
  },
  bottomWindow: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    top: 73,
    height: screenHeight - 231 - 73,
    width: screenWidth,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: "absolute",
    overflow: 'hidden'
  },
  topBox: {
    height: 73,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontFamily: FontFamily.notoBold,
    fontSize: 24,
    color: 'white',
    marginTop: 10,
  },
  brain: {
    width: 90,
    height: 90,
    right: 25,
    top: -25,
    position: 'absolute'
  },
  bottomBox: {
    flex: 1,
    height: screenHeight - 231 - 73,
    width: screenWidth,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskBox: {
    height: 375,
    width: screenWidth,
  }
})