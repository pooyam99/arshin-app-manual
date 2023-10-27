import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'
import { Image } from 'expo-image';
import { FontFamily } from '../../styles/GlobalStyles';
import ToolBoxBtn from './ToolBoxBtn';
import AddTask from './AddTask';
import Tabs from './Tabs';
import Tasks from './Tasks';
import { TaskExample } from './TaskExample'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const tabs = ["دسته‌ها", "همه", "امروز", "فردا", "هفته", "ماه"];
const toText = (activeTab) => {
  switch (activeTab) {
    case 'دسته‌ها':
      return 'در مجموع'
    case 'همه':
      return 'در مجموع'
    case 'امروز':
      return 'امروز'
    case 'فردا':
      return 'فردا'
    case 'هفته':
      return 'این هفته'
    case 'ماه':
      return 'این ماه'
  }
}

const taskCounts = (activeTab) => {
  let total = TaskExample.length;
  let today = TaskExample.filter((item) => item.time.day === 'امروز' ? true : false).length;
  let tomorrow = TaskExample.filter((item) => item.time.day === 'فردا' ? true : false).length;
  let week = TaskExample.filter((item) => item.time.day === 'هفته' ? true : false).length;
  let month = TaskExample.filter((item) => item.time.day === 'ماه' ? true : false).length;

  switch (activeTab) {
    case 'دسته‌ها':
      return total
    case 'همه':
      return total
    case 'امروز':
      return today
    case 'فردا':
      return tomorrow
    case 'هفته':
      return week
    case 'ماه':
      return month
  }
}

const Main = () => {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0.15)', 'transparent']}
        end={{ x: 0.5, y: 0.02 }}
        style={styles.topWindow}
      >
        <View style={styles.topBox}>
          <Text style={styles.title}>یادآور امور روزانه</Text>
          <Image
            source={require("../../../assets/TodoList/brain-reminders.png")}
            contentFit="cover"
            style={styles.brain}
          />
        </View>
      </LinearGradient>
      <LinearGradient
        colors={['rgba(0,0,0,0.2)', 'transparent']}
        end={{ x: 0.5, y: 0.02 }}
        style={styles.midWindow}
      >
        <View style={styles.midBox}>
          <Text style={styles.toText}>
            شما {toText(activeTab)}
            <Text style={styles.todoCount}> {taskCounts(activeTab)} </Text>
            امر برای انجام دارید
          </Text>
          <View style={styles.searchBox}>
            <Image
              style={styles.searchIcon}
              contentFit="cover"
              source={require("../../../assets/TodoList/ic-round-search.svg")}
            />
            <TextInput
              placeholder='جستجوی امور'
              style={styles.input}
            />
          </View>
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
      </LinearGradient>
      <LinearGradient
        colors={['rgba(0,0,0,0.15)', 'transparent']}
        end={{ x: 0.5, y: 0.02 }}
        style={styles.bottomWindow}
      >
        <View style={styles.bottomBox}>
          <View style={styles.taskBox}>
            <Tasks activeTab={activeTab} taskData={TaskExample} />
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
    top: 200,
    height: screenHeight - 231 - 73 - 127,
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
    right: 10,
    top: -21,
    position: 'absolute'
  },
  midBox: {
    height: 127,
    flexDirection: 'column',
    alignItems: 'center'
  },
  searchBox: {
    marginTop: -2,
    backgroundColor: 'white',
    width: 280,
    height: 48,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    elevation: 4,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: "black",
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 8,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    textAlign: 'right',
    color: '#888',
    fontFamily: FontFamily.notoRegular,
    fontSize: 16,
    marginTop: 3
  },
  toText: {
    fontFamily: FontFamily.notoBold,
    fontSize: 20,
    color: '#363636',
  },
  todoCount: {
    fontFamily: FontFamily.bZarBold,
    color: '#FE0000',
    fontSize: 22
  },
  bottomBox: {
    flex: 1,
    height: screenHeight - 231 - 73 - 127,
    width: screenWidth,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskBox: {
    height: screenHeight - 231 - 73 - 127 - 139,
    width: screenWidth,
  }
})