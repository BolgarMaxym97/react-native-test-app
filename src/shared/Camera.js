import {Linking, StyleSheet, Text, View} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import React, {useEffect, useState} from 'react';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';

const CameraComponent = ({setScannedCode}) => {
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = React.useCallback(async () => {
    const permission = await Camera.requestCameraPermission();

    if (permission === 'denied') {
      Linking.openSettings();
    }
  }, []);

  const [frameProcessor, barcodes] = useScanBarcodes([
    BarcodeFormat.ALL_FORMATS, // You can only specify a particular format
  ]);

  useEffect(() => {
    toggleActiveState();
    return () => {
      barcodes;
    };
  }, [barcodes]);

  const toggleActiveState = async () => {
    if (barcodes && barcodes.length > 0) {
      barcodes.forEach(async (scannedBarcode: any) => {
        if (scannedBarcode.rawValue !== '') {
          setScannedCode(scannedBarcode.rawValue);
        }
      });
    }
  };

  if (device == null) {
    return <View><Text>Loading</Text></View>;
  }

  return (
      <>
        <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            frameProcessor={frameProcessor}
            audio={false}
        />
      </>
  );
};

export default CameraComponent;
