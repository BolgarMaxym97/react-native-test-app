import React from 'react';
import {Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <Button
            title="Go to camera"
            onPress={() =>
                navigation.navigate('Camera')
            }
        />
    );
};

export default HomeScreen;
