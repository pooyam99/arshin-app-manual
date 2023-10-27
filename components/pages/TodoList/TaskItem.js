import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';
import { Image } from 'expo-image';
import StarRating from 'react-native-star-rating-widget';
import { FontFamily } from '../../styles/GlobalStyles';
import { TodoCategories } from '../../styles/TodoListStyles';

const screenWidth = Dimensions.get('window').width;

const getInfo = (category) => {
  switch (category) {
    case 'shopping':
      return TodoCategories.shopping
    case 'work':
      return TodoCategories.work
    case 'school':
      return TodoCategories.school
    case 'misc':
      return TodoCategories.misc
    case 'fun':
      return TodoCategories.fun
    case 'reading':
      return TodoCategories.reading
  }
}

const TaskItem = ({ category, title, time }) => {
  const [isChecked, setChecked] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <LinearGradient
      colors={['rgba(0,0,0,0.15)', 'transparent']}
      end={{ x: 0.5, y: 0.1 }}
      style={styles.container(getInfo(category).color)}
    >
      <View style={styles.checkBox}>
        <Checkbox
          color={"black"}
          value={isChecked}
          onValueChange={setChecked}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.topBox}>
          <View style={styles.category}>
            <Image
              style={styles.categoryIcon}
              contentFit="contain"
              source={getInfo(category).address}
            />
            <Text style={styles.categoryTitle}>{getInfo(category).title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.title(isChecked)}>{title}</Text>
            <StarRating
              rating={rating}
              onChange={setRating}
              starSize={20}
              color='#FFCB45'
              emptyColor='#F2F2F2'
              enableHalfStar={false}
              style={styles.rating}
            />
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.bottomBox}>
          <View style={[styles.button, { backgroundColor: isChecked ? "#4A7F00" : "#7D7C73" }]}>
            <Image
              style={{ width: 15, height: 15 }}
              contentFit="contain"
              source={require("../../../assets/TodoList/notes.svg")}
            />
            <Text style={styles.buttonTitle}>{isChecked ? `انجام شده` : `انجام نشده`}</Text>
          </View>
          <Pressable style={[styles.button, { backgroundColor: "#C19450" }]}>
            <Image
              style={{ width: 13, height: 13 }}
              contentFit="contain"
              source={require("../../../assets/TodoList/edit.svg")}
            />
            <Text style={styles.buttonTitle}>ویرایش</Text>
          </Pressable>
          <Pressable style={[styles.button, { backgroundColor: "#E32A40" }]}>
            <Image
              style={{ width: 16, height: 16 }}
              contentFit="contain"
              source={require("../../../assets/TodoList/trash.svg")}
            />
            <Text style={styles.buttonTitle}>حذف</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.time}>
        <View style={styles.timeBox}>
          <Text style={styles.timeText}>{time.hour}</Text>
          <Text style={styles.timeText}>{time.part}</Text>
        </View>
        <Text style={styles.timeDay}>{time.day}</Text>
      </View>
    </LinearGradient>
  )
}

export default TaskItem

const styles = StyleSheet.create({
  container: (color) => ({
    flex: 1,
    flexDirection: 'row-reverse',
    height: 94,
    width: screenWidth,
    backgroundColor: color,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  }),
  checkBox: {
    marginTop: 18,
    marginRight: 15,
    marginLeft: 5
  },
  main: {
    width: screenWidth - 140,
    overflow: 'hidden'
  },
  topBox: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    marginTop: -3,
    marginBottom: 3,
    gap: 5,
  },
  details: {
    alignItems: 'flex-end'
  },
  title: (isChecked) => ({
    fontFamily: FontFamily.notoBold,
    fontSize: 24,
    textDecorationLine: isChecked ? 'line-through' : null
  }),
  rating: {
    marginTop: -8,
    marginRight: -7,
  },
  category: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryIcon: {
    width: 32,
    height: 32,
  },
  categoryTitle:{
    fontFamily: FontFamily.notoBold,
    fontSize: 10,
    color: 'white',
    marginTop: -4,
  },
  separator: {
    width: screenWidth - 140,
    height: 1,
    backgroundColor: 'black'
  },
  bottomBox: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    marginTop: 4,
    marginLeft: 35,
    gap: 5
  },
  button: {
    width: 63,
    height: 21,
    borderRadius: 25,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2
  },
  buttonTitle: {
    color: 'white',
    fontSize: 10,
    fontFamily: FontFamily.bZarBold
  },
  time: {
    marginTop: 15,
    marginHorizontal: 2,
    alignItems: 'center',
  },
  timeBox: {
    width: 87,
    height: 27,
    borderRadius: 10,
    backgroundColor: "#070750",
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  timeText: {
    color: 'white',
    fontSize: 12,
    fontFamily: FontFamily.bZarBold
  },
  timeDay: {
    color: "#070750",
    fontSize: 20,
    fontFamily: FontFamily.notoBold
  },
})