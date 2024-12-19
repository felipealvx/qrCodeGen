import { Text, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={ styles.header }>
      <Text style={ styles.text }>
        QRCODEGEN
      </Text>
    </View>
  )
};

const styles = StyleSheet.create ({
  header: {
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: '#042940',
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: 20
  }
});