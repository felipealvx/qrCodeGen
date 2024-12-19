import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Header from './src/components/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
        <Home/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
});
