import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontFamily } from '../../styles/GlobalStyles';

const TabButton = ({ name, activeTab, setActiveTab }) => (
  <Pressable style={styles.tabTile(name, activeTab)} onPress={setActiveTab}>
    <Text style={styles.tabText(name)}>{name}</Text>
  </Pressable>
)

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.tabsBox}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            setActiveTab={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={styles.tabsBox}
      />
    </View>
  )
}

export default Tabs

const styles = StyleSheet.create({
  tabsBox: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  tabTile: (name, activeTab) => ({
    width: 57,
    height: 27,
    borderWidth: 1,
    borderColor: "#646FD4",
    backgroundColor: name === activeTab ? "#FD6565" : null,
    borderRadius: 14,
  }),
  tabText: (name) => ({
    fontFamily: FontFamily.notoRegular,
    fontSize: name === 'دسته‌ها' ? 16 : 16,
    textAlign: 'center',
    marginTop: name === 'دسته‌ها' ? -4 :  -4
  })
})