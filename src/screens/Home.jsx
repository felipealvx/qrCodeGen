import { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text} from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function Home() {

    const [text, setText] = useState('');
    const [qrCode, setQrCode] = useState('');

    return (
        <View style={ styles.container }>
            <TextInput 
                placeholder="Digite seu texto"
                style={ styles.input }
                value={text}
                onChangeText={setText}
            />

            <QRCode 
            value={qrCode || " "}
            logoSize={30}
            logoBackgroundColor="transparent"
            size={200}
            enableLinearGradient={true}
            linearGradient={['#042940','blue']}
            quietZone={5}
            />
            
            <TouchableOpacity 
            style={ styles.button }
            onPress={() => setQrCode(text)}
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