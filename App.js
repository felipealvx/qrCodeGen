import { Image, ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import Header from './src/components/Header';
import Footer from './src/components/Footer'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerContent}>
            <Header />
            <Home />
            <Footer />
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
  containerContent: {
    gap: 20,
  }
});
