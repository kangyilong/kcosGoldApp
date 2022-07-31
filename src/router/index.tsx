import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavigatorUtil from 'methods/NavigatorUtil';
import CommonIcon from 'components/commonIcon/index';

import BottomTabNavigator from './BottomTabNavigator/index';
import Page01 from 'pages/home/children/page01';

const Stack = createNativeStackNavigator();

const routes = [{
    key: 'BottomTabNavigator',
    component: BottomTabNavigator
}, {
    key: 'Page01',
    component: Page01,
    headerShown: true,
    headerStyle: {
        backgroundColor: '#e6ff8d',
        color: '#ff7a55',
        fontSize: 24,
    },
    title: 'page01'
}];

const Routes = () => <Stack.Navigator>
    {
        routes.map((route: any) => {
            const {key, component, headerShown, headerStyle = {}, title, touchStyle = null} = route;
            return <Stack.Screen
                key={key}
                name={key}
                component={component}
                options={{
                    headerShown: !!headerShown,
                    title,
                    headerStyle,
                    headerLeft: ({canGoBack}) => {
                        return <TouchableOpacity
                            style={touchStyle}
                            activeOpacity={0.9}
                            onPress={() => {
                                if (!canGoBack) return;
                                console.log(NavigatorUtil.navigation)
                                NavigatorUtil.navigation.pop();
                            }
                        }>
                            <CommonIcon name="arrow-left-bold" size={20} color="#333"/>
                        </TouchableOpacity>
                    }
                }}
            />
        })
    }
</Stack.Navigator>;

export default Routes;