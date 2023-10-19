import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useFonts } from "expo-font";
import TodoList from './pages/TodoList.js';
import Login from './pages/Login.js';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Noto-Regular": require("./assets/fonts/NotoSansArabic-Regular.ttf"),
    "Noto-Bold": require("./assets/fonts/NotoSansArabic-Bold.ttf"),
  });
  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor="white" translucent={false} />
      <TodoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFD0E0',
  },
});
