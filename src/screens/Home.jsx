import { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text} from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function Home() {

    const [text, setText] = useState('');
    const [qrCode, setQrCode] = useState('');

    return (
        <View style={ styles.container }>

            <View style={ styles.qrCode }>
                <QRCode 
                value={qrCode || " "}
                logoSize={30}
                logoBackgroundColor="transparent"
                size={200}
                color="#1e1e1e"
                quietZone={5}
                />
            </View>

            <View style={ styles.elements }>
                <TextInput 
                    placeholder="Digite seu texto"
                    style={ styles.input }
                    value={text}
                    onChangeText={setText}
                />
                
                <TouchableOpacity 
                style={ styles.button }
                onPress={() => setQrCode(text)}
                >
                    <Text style={ styles.buttonText }> Gerar </Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create ({
    container: {
        gap: 20,
        alignItems: 'center',
    },
    elements: {
        gap: 20,
        width: '100%',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        height: 70,
    },
    button: {
        width: '100%',
        backgroundColor: '#2F85ED',
        borderRadius: 20,
        height: 70,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'whitesmoke',
        fontWeight: 600,
        textAlign: 'center'
    },
    qrCode: {
        padding: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#929292'
    }
})