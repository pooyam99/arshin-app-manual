import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from "expo-font";
import Login from './pages/Login.js';
import Bottom from './components/Bottom.js';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Noto-Regular": require("./assets/fonts/NotoSansArabic-Regular.ttf"),
    "Noto-Bold": require("./assets/fonts/NotoSansArabic-Bold.ttf"),
  });
  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Login  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFD0E0',
  },
});
