import * as React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import PINCode, {
  hasUserSetPinCode,
  resetPinCodeInternalStates,
  deleteUserPinCode,
} from "@haskkor/react-native-pincode";


export default function App() {

  const finishProcess = async () => {
    const hasPin = await hasUserSetPinCode();
    if (hasPin) {
      Alert.alert(null, "You have successfully set/entered your pin.", [
        {
          title: "Ok mah bauyyy",
          onPress: () => {
            // do nothing
          },
        },
      ]);
      
    }


  }
  return (
    <View style={styles.container}>

          <PINCode
            status={'enter'}
            touchIDDisabled={false}
            finishProcess={() => finishProcess()}
            colorCircleButtons={'white'}
            stylePinCodeButtonNumberPressed={'blue'}
            colorPassword={'blue'}
            numbersButtonOverlayColor={'#89afd9'}
            styleLockScreenText={{fontSize: 20}}
            stylePinCodeCircle={{height: 20, width: 20,borderRadius: 10}}
            stylePinCodeColorTitle={'blue'}
            stylePinCodeColorSubtitle={'blue'}
            stylePinCodeTextSubtitle={{fontSize: 15,fontWeight: 'bold'}}
            stylePinCodeTextTitle={{fontSize: 25,fontWeight: 'bold'}}
            
            
            stylePinCodeButtonNumber={'blue'}
            
          />

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    marginTop: 20,
    color: "red",
  },
  button: {
    marginBottom: 10,
    padding: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  seperator: {
    margin: 10,
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

