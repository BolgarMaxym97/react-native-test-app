import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CameraScreen from './screens/camera/Camera';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CartScreen from './screens/cart/Cart';
import DocumentsScreen from './screens/documents/Documents';
import PriceTagsScreen from './screens/priceTags/PriceTags';
import OtherScreen from './screens/other/Other';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App: () => Node = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Scanner">
                <Tab.Screen name="Scanner"
                            options={{
                                tabBarLabel: 'Сканер',
                                headerTitle: '',
                                tabBarIcon: ({ focused, color, size }) => {
                                    return <MaterialCommunityIcons name="barcode-scan" color={color} size={size}/>;
                                },
                            }}
                            component={CameraScreen}/>
                <Tab.Screen name="Cart"
                            options={{
                                tabBarLabel: 'Корзина',
                                headerTitle: '',
                                tabBarIcon: ({ focused, color, size }) => {
                                    return <FontAwesomeIcons name="shopping-basket" color={color} size={size}/>;
                                },
                            }}
                            component={CartScreen}/>
                <Tab.Screen name="Documents"
                            options={{
                                tabBarLabel: 'Документы',
                                headerTitle: '',
                                tabBarIcon: ({ focused, color, size }) => {
                                    return <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size}/>;
                                },
                            }}
                            component={DocumentsScreen}/>
                <Tab.Screen name="PriceTags"
                            options={{
                                tabBarLabel: 'Ценники',
                                headerTitle: '',
                                tabBarIcon: ({ focused, color, size }) => {
                                    return <IoniconsIcons name="ios-pricetags-outline" color={color} size={size}/>;
                                },
                            }}
                            component={PriceTagsScreen}/>
                <Tab.Screen name="Other"
                            options={{
                                tabBarLabel: 'Другое',
                                headerTitle: '',
                                tabBarIcon: ({ focused, color, size }) => {
                                    return <MaterialCommunityIcons name="menu" color={color} size={size}/>;
                                },
                            }}
                            component={OtherScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
