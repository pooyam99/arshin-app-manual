import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { FontFamily } from '../../styles/GlobalStyles';
import { EventCategories } from '../../styles/EventStyles';

const screenWidth = Dimensions.get('window').width;

const getInfo = (category) => {
  switch (category) {
    case 'celebration':
      return EventCategories.celebration
    case 'anniversary':
      return EventCategories.anniversary
    case 'reminder':
      return EventCategories.reminder
  }
}

const TaskItem = ({ category, title, description, date }) => {
  return (
    <LinearGradient
      colors={['rgba(0,0,0,0.15)', 'transparent']}
      end={{ x: 0.5, y: 0.1 }}
      style={styles.container(getInfo(category).color)}
    >
      <View style={styles.main}>
        <View style={styles.topBox}>
          <View style={styles.details}>
            <Image
              style={styles.categoryIcon}
              contentFit="contain"
              source={getInfo(category).address}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <Text style={styles.description}>توضیحات: {description}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.bottomBox}>
          <View style={styles.buttonBox}>
            <Pressable style={[styles.button, { backgroundColor: "#C19450" }]}>
              <Image
                style={{ width: 13, height: 13 }}
                contentFit="contain"
                source={require("../../../assets/Events/edit.svg")}
              />
              <Text style={styles.buttonTitle}>ویرایش</Text>
            </Pressable>
            <Pressable style={[styles.button, { backgroundColor: "#E32A40" }]}>
              <Image
                style={{ width: 16, height: 16 }}
                contentFit="contain"
                source={require("../../../assets/Events/trash.svg")}
              />
              <Text style={styles.buttonTitle}>حذف</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.date}>
        <View style={styles.dateBox}>
          <Text style={[styles.dateText, {marginBottom: -10}]}>{date.d}</Text>
          <Text style={[styles.dateText, {marginBottom: -5}]}>{date.m}</Text>
          <Text style={styles.dateText}>{date.y}</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

export default TaskItem

const styles = StyleSheet.create({
  container: (color) => ({
    flex: 1,
    flexDirection: 'row-reverse',
    height: 125,
    width: screenWidth,
    backgroundColor: color,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  }),
  main: {
    width: screenWidth - 135,
    marginRight: 20,
    marginLeft: 5,
    overflow: 'hidden'
  },
  topBox: {
    alignItems: 'flex-end',
    marginTop: 5
  },
  details: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -10,
    gap: 10
  },
  title: {
    fontFamily: FontFamily.notoBold,
    fontSize: 24,
  },
  categoryIcon: {
    width: 36,
    height: 36,
  },
  description: {
    fontFamily: FontFamily.notoBold,
    fontSize: 14,
  },
  separator: {
    width: screenWidth - 135,
    height: 1,
    backgroundColor: 'black'
  },
  bottomBox: {
    flexDirection: 'row',
  },
  buttonBox: {
    flexDirection: 'row-reverse',
    marginTop: 5,
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
  date: {
    marginTop: 13,
    marginRight: 5,
    alignItems: 'center',
  },
  dateBox: {
    width: 95,
    height: 95,
    borderRadius: 15,
    backgroundColor: "#070750",
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5
  },
  dateText: {
    color: 'white',
    fontSize: 24,
    fontFamily: FontFamily.bZarBold
  },
})