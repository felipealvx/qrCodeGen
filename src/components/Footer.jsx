import { Image, StyleSheet, Text, View } from "react-native";
import Detail from "../../assets/detail.png"

export default function Footer() {
    return (
        <View style={styles.footerContent}>
            <Text style={ styles.textFooter}>
                projeto desenvolvido por <Text style={styles.spanText}>@felipealvx</Text>
            </Text>
            <Image source={Detail} style={styles.detail} />
        </View>
    )
}

const styles = StyleSheet.create ({
    textFooter: {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 10,
    },
    spanText: {
        color: '#2F85ED',
        fontStyle: 'italic'
    },
    detail: {
        position: 'absolute',
        left: -20,
    }
});