import { useState } from "react";
import { Button, StyleSheet, TextInput, View, TouchableOpacity, Text} from "react-native";
import QRCode from "react-native-qrcode-svg";


export default function Home() {

    // const [text, setText] = useState("");

    return (
        <View style={ styles.container }>
            <TextInput 
            placeholder="Digite seu texto"
            style={ styles.input }
            // onChangeText={}
            />

            <QRCode 
            value={ "no value" }
            logoSize={30}
            logoBackgroundColor="transparent"
            size={200}
            />

            <TouchableOpacity 
            style={ styles.button }
            // onPress={ }
            >
                <Text style={ styles.buttonText }> Gerar </Text>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create ({
    container: {
        gap: 20,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#042940',
        width: '100%',
        paddingBlock: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'whitesmoke',
        fontSize: 20,
        fontWeight: 600,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#f1f1f1',
        width: '100%',
        borderRadius: 5,
        padding: 20,

    }
})