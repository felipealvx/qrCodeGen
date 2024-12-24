import { useRef, useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image, Share} from "react-native";
import QRCode from "react-native-qrcode-svg";
import SvgIcon from "../../assets/icons/svg-icon.png";
import JpgIcon from "../../assets/icons/jpg-icon.png";
import UploadIcon from "../../assets/icons/upload-icon.png";
import * as ImagePicker from "expo-image-picker";
import { shareAsync } from "expo-sharing";
import * as FileSystem from "expo-file-system";

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
                <TextInput 
                    placeholder="Digite seu texto"
                    style={ styles.input }
                    value={text}
                    onChangeText={setText}
                    onChange={() => setQrCode(text)}
                />

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
                
                <View style={ styles.saveButtons }>
                    <TouchableOpacity 
                    style={ styles.buttonSave }>
                        <Text 
                        style={ styles.buttonText }>
                            Baixar JPG
                        </Text>
                        <Image 
                        source={JpgIcon} 
                        style={ styles.iconStyle } />
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={ styles.buttonSave }>
                        <Text 
                        style={ styles.buttonText }>
                            Baixar SVG
                        </Text>
                        <Image 
                        source={SvgIcon} 
                        style={ styles.iconStyle } />
                    </TouchableOpacity>
                </View>
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
        borderColor: '#929292'
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
    },
    buttonText: {
        color: '#fff',
        fontWeight: 600,
        textAlign: 'center',
    },
    saveButtons: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: 20,
    },
    buttonSave: {
        display: 'flex',
        flexDirection: 'row',
        width: '47%',
        backgroundColor: '#2F85ED',
        height: 70,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
})