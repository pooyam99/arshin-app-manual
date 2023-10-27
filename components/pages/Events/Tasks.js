import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import TaskItem from './TaskItem'

const Tasks = ({ taskData }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={taskData}
        renderItem={({ item }) => (
          <TaskItem
            category={item.category}
            title={item.title}
            description={item.description}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.title}
      />
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