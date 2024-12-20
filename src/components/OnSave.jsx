import { CameraRoll , ToastAndroid } from "react-native";
import RNFS from "react-native-fs";

export default function OnSave(){
    return(
        this.svg.toDataURL((data) => {
            RNFS.writeFile(RNFS.CachesDirectoryPath+"/some-name.png", data, 'base64')
              .then((success) => {
                  return CameraRoll.saveToCameraRoll(RNFS.CachesDirectoryPath+"/some-name.png", 'photo')
              })
              .then(() => {
                  this.setState({ busy: false, imageSaved: true  })
                  ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT)
              })
        })
    )
}