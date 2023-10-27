import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from './Categories'
import TaskItem from './TaskItem'

const Tasks = ({ activeTab, taskData }) => {
  const category = (activeTab) => {
    let total = taskData;
    let today = taskData.filter((item) => item.time.day === 'امروز' ? true : false);
    let tomorrow = taskData.filter((item) => item.time.day === 'فردا' ? true : false);
    let week = taskData.filter((item) => item.time.day === 'هفته' ? true : false);
    let month = taskData.filter((item) => item.time.day === 'ماه' ? true : false);
  
    switch (activeTab) {
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

  return (
    <View style={styles.container}>
      {activeTab === 'دسته‌ها' ?
        <Categories />
        :
        <FlatList
          data={category(activeTab)}
          renderItem={({ item }) => (
            <TaskItem
              category={item.category}
              title={item.title}
              time={item.time}
            />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.title}
        />
      }
    </View>
  )
}

export default Tasks

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})