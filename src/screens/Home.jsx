import { TextInput, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function Home() {
    return (
        <View>
            <TextInput 
            placeholder="Digite seu texto"
            />
            <QRCode value="http://awesome.link.qr"/>
        </View>
        
    );
}
