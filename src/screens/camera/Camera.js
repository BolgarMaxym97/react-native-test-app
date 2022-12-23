import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CameraComponent from '../../shared/Camera';

const CameraScreen = () => {
    const [scannedCode, setScannedCode] = useState("No code");
    return <View style={styles.container}>
        <View style={styles.cameraContainer}>
            <CameraComponent setScannedCode={setScannedCode}/>
            <View style={styles.results}>
                <Text>{scannedCode}</Text>
            </View>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cameraContainer: {
        flex: 1,
        height: '100%',
    },
    results: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        height: 200,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
});


export default CameraScreen;

