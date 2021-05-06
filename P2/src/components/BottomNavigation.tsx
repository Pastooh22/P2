import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import Home from '../screens/Home';
import FoodList from '../screens/FoodList';
import Recipes from '../screens/Recipes';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#579497'
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="FoodList"
                component={FoodList}
                options={{
                    tabBarLabel: 'FoodList',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Recipes"
                component={Recipes}
                options={{
                    tabBarLabel: 'Recipes',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="image-multiple" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;