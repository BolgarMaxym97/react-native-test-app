import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import CameraComponent from '../../shared/Camera';
import {RNHoleView} from 'react-native-hole-view';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

const CameraScreen = () => {
    const [scannedCode, setScannedCode] = useState("No code");
    return <View style={styles.container}>
        <View style={styles.cameraContainer}>
            <CameraComponent setScannedCode={setScannedCode}/>
            <View style={styles.searchSection}>
                <IoniconsIcons style={styles.searchIcon} name="search" color={"#000"} size={20}/>
                <TextInput
                    style={styles.input}
                    placeholder="Введіть штрих-код або артикул"
                    placeholderTextColor="#000"
                    onChangeText={setScannedCode}
                />
            </View>
            <RNHoleView
                style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}
                holes={[{ x: 20, y: 50, width: 350, height: 250, borderRadius: 0 }]}>
            </RNHoleView>
            <View style={styles.results}>
                <View style={styles.resultsAnchor}/>
                <Text>{scannedCode}</Text>
                <View/>
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
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: "space-between",
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white",
        height: 200,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    resultsAnchor: {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        width: 80,
        height: 5,
        marginTop: 10,
        borderRadius: 5,
    },
    searchSection: {
        height: 50,
        width: 350,
        position: 'absolute',
        top: 350,
        left: 20,
        right: 0,
        bottom: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 50,
        zIndex: 1
    },
    input: {
        padding: 10,
        alignItems: 'center',
        zIndex: 999,
        flex: 1,
    },
    searchIcon: {
        padding: 10,
    },
});


export default CameraScreen;

