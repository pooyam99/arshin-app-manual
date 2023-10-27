import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { FontFamily } from '../../styles/GlobalStyles';
import { FinanceStyles } from '../../styles/FinanceStyles';

const screenWidth = Dimensions.get('window').width;

const TaskItem = ({ title, amount, date }) => {
  const rng = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const format = (amount) => {
    return Number(amount)
    .toFixed()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$&/')
  }

  return (
    <LinearGradient
      colors={['rgba(0,0,0,0.15)', 'transparent']}
      end={{ x: 0.5, y: 0.1 }}
      style={styles.container(rng(1, 3))}
    >
      <View style={styles.main}>
        <View style={styles.topBox}>
          <View style={styles.details}>
            <Image
              style={styles.categoryIcon}
              contentFit="contain"
              source={FinanceStyles.address}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.amountText}> مبلغ: </Text>
            <Text style={styles.amountNum}>{format(amount)} تومان</Text>
          </View>
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
          <Text style={[styles.dateText, { marginBottom: -10 }]}>{date.d}</Text>
          <Text style={[styles.dateText, { marginBottom: -5 }]}>{date.m}</Text>
          <Text style={styles.dateText}>{date.y}</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

export default TaskItem

const styles = StyleSheet.create({
  container: (rng) => ({
    flex: 1,
    flexDirection: 'row-reverse',
    height: 125,
    width: screenWidth,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: rng === 1 ? FinanceStyles.colors.one
      : rng === 2 ? FinanceStyles.colors.two
        : FinanceStyles.colors.three
  }),
  main: {
    width: screenWidth - 135,
    marginRight: 20,
    marginLeft: 5,
    overflow: 'hidden'
  },
  topBox: {
    marginTop: 5
  },
  details: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  amountText: {
    fontFamily: FontFamily.notoBold,
    fontSize: 14,
  },
  amountNum: {
    fontFamily: FontFamily.bZarBold,
    fontSize: 20,
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