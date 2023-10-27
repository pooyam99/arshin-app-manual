import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useFonts } from "expo-font";
import TodoList from './components/pages/TodoList/TodoList';
import Events from './components/pages/Events/Events';
import FinancialTasks from './components/pages/FinancialTasks/FinancialTasks';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Noto-Regular": require("./assets/fonts/NotoSansArabic-Regular.ttf"),
    "Noto-Bold": require("./assets/fonts/NotoSansArabic-Bold.ttf"),
    "B-Zar": require("./assets/fonts/B-Zar.ttf"),
    "B-Zar-Bold": require("./assets/fonts/B-Zar-Bold.ttf"),
  });
  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor="transparent" translucent={false} />
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
