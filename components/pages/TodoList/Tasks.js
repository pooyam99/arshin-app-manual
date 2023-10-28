import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from './Categories'
import TaskItem from './TaskItem'

const Tasks = ({ activeTab, taskData, deleteTask }) => {
  const category = (activeTab) => {
    if (activeTab === 'همه') {
      return taskData
    } else {
      return taskData.filter((item) => item.time.day === activeTab)
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
              deleteTask={() => deleteTask(item.id)}
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