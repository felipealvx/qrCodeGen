import { Text, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={ styles.header }>
      <Text style={ styles.text }>
        Criador de QR-CODE
      </Text>
    </View>
  )
};

const styles = StyleSheet.create ({
  header: {
    alignItems: 'center',
    padding: 10,
    fontSize: 30,
  },
  text: {
    color: '#042940',
    fontSize: 30,
    fontWeight: 700,
  }
});