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
            title={item.title}
            amount={item.amount}
            date={item.date}
            deleteTask={() => deleteTask(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
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