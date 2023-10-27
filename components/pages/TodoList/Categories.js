import { Dimensions, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { FontFamily } from '../../styles/GlobalStyles';
import { TodoCategories } from '../../styles/TodoListStyles';
import { TaskExample } from './TaskExample'

const screenWidth = Dimensions.get('window').width;

const categories = ["shopping", "work", "school", "misc", "fun", "reading"];

const taskCounts = (category) => {
  let shoppings = TaskExample.filter((item) => item.category === 'shopping' ? true : false).length;
  let works = TaskExample.filter((item) => item.category === 'work' ? true : false).length;
  let schools = TaskExample.filter((item) => item.category === 'school' ? true : false).length;
  let miscs = TaskExample.filter((item) => item.category === 'misc' ? true : false).length;
  let funs = TaskExample.filter((item) => item.category === 'fun' ? true : false).length;
  let readings = TaskExample.filter((item) => item.category === 'reading' ? true : false).length;

  switch (category) {
    case 'shopping':
      return shoppings
    case 'work':
      return works
    case 'school':
      return schools
    case 'misc':
      return miscs
    case 'fun':
      return funs
    case 'reading':
      return readings
  }
}

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

const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Pressable>
            <View style={styles.tile(getInfo(item).color)}>
              <Text style={styles.count}>{taskCounts(item)} مورد</Text>
              <Image
                style={styles.icon}
                contentFit="contain"
                source={getInfo(item).address}
              />
              <Text style={styles.title}>{getInfo(item).title}</Text>
            </View>
          </Pressable>
        )}

        numColumns={3}
        contentContainerStyle={{ gap: 14, padding: 40 }}
        columnWrapperStyle={{ gap: 14, flexDirection: 'row-reverse' }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: screenWidth,
  },
  tile: (color) => ({
    width: 100,
    height: 100,
    backgroundColor: color,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 4 },
    shadowColor: "black",
  }),
  icon: {
    width: 32,
    height: 32,
  },
  title: {
    fontFamily: FontFamily.notoRegular,
    fontSize: 16,
    color: 'white',
    marginTop: -5
  },
  count: {
    fontFamily: FontFamily.bZar,
    fontSize: 16,
    color: 'white',
    marginTop: -10,
    marginRight: 10,
    alignSelf: 'flex-end'
  }
})