import { useState } from "react";
import {
    StyleSheet, 
    TextInput, 
    View, 
    TouchableOpacity, 
    Text, 
    Image, 
    useColorScheme } from "react-native";
import QRCode from "react-native-qrcode-svg";
import UploadIcon from "../../assets/icons/upload-icon.png";
import * as ImagePicker from "expo-image-picker";

export default function Home() {

    const [text, setText] = useState('');
    const [qrCode, setQrCode] = useState('');
    const [image, setImage] = useState(null);

    // add imagem de logo
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    };

    return (
        <View style={ styles.container }>
            <View style={ styles.qrCode }>
                <QRCode 
                value={qrCode || " "}
                logoSize={50}
                logoBackgroundColor="transparent"
                size={200}
                color="#1e1e1e"
                logo={ image }
                />
            </View>
            
            <View style={ styles.elements }>
                <View style={ styles.inputContainer }>
                    <TextInput 
                    placeholder="Digite seu texto"
                    style={ styles.input }
                    value={text}
                    onChangeText={setText}
                    onChange={() => setQrCode(text)}
                    />              
                </View>
                <TouchableOpacity
                style={ styles.button }
                onPress={pickImage}
                >
                    <Text style={ styles.buttonText }>
                        Inserir Logo
                    </Text>
                    <Image 
                    source={UploadIcon} 
                    style={ styles.iconStyle }
                    />
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
    qrCode: {
        padding: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#929292',
        elevation: 9
    },
    elements: {
        gap: 20,
        width: '100%',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        height: 70,
        elevation: 9,
    },
    button: {
        width: '100%',
        backgroundColor: '#2F85ED',
        borderRadius: 10,
        height: 70,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        elevation: 9,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 600,
        textAlign: 'center',
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
})