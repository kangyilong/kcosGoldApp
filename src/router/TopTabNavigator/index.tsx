import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TECHNOLOGY_STACK } from 'methods/config';

import CarefullySelected from 'pages/home/topTars/carefullySelected';
import FocusOn from 'pages/home/topTars/focusOn';
import HotList from 'pages/home/topTars/hotList';
import Recommend from 'pages/home/topTars/recommend';

const Tab = createMaterialTopTabNavigator();

const { width } = Dimensions.get('window');
const TOP_BAR_PADDING_RIGHT = 20;

interface LabelInterface {
    focused: boolean,
    text: string
}
const TabBarLabel = ({ focused, text }: LabelInterface) => {
    const styles: any = focused
        ? {
            width: (width - TOP_BAR_PADDING_RIGHT) / 5,
            color: '#111',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center'
        }
        : {
            width: (width - TOP_BAR_PADDING_RIGHT) / 5, textAlign: 'center'
        };
    return <Text style={styles}>
        {text}
    </Text>;
};

const stackRoutes = TECHNOLOGY_STACK.map(item => {
    return {
        name: item.name,
        component: CarefullySelected,
        options: {
            tabBarLabel: ({ focused }: any) => <TabBarLabel focused={focused} text={item.title}/>,
        }
    }
});

const routes: any = [{
    name: 'FocusOn',
    component: FocusOn,
    options: {
        tabBarLabel: ({ focused }: any) => <TabBarLabel focused={focused} text={'关注'}/>
    }
}, {
    name: 'Recommend',
    component: Recommend,
    options: {
        tabBarLabel: ({ focused }: any) => <TabBarLabel focused={focused} text={'推荐'}/>,
    }
}, {
    name: 'HotList',
    component: HotList,
    options: {
        tabBarLabel: ({ focused }: any) => <TabBarLabel focused={focused} text={'热榜'}/>,
    }
}, {
    name: 'CarefullySelected',
    component: CarefullySelected,
    options: {
        tabBarLabel: ({ focused }: any) => <TabBarLabel focused={focused} text={'精选'}/>,
    }
},
    ...stackRoutes
];

export default function () {
    return (
        <Tab.Navigator
            initialRouteName={'Recommend'}
            screenOptions={{
                tabBarStyle: { paddingRight: TOP_BAR_PADDING_RIGHT },
                tabBarLabelStyle: { fontSize: 14, color: '#333' },
                tabBarItemStyle: { width: (width - TOP_BAR_PADDING_RIGHT) / 5, paddingBottom: 3, paddingTop: 10, paddingHorizontal: 0, alignItems: 'center' },
                tabBarIndicatorStyle: {
                    width: 16,
                    position: 'absolute',
                    left: ((width - TOP_BAR_PADDING_RIGHT) / 5 - 16) / 2,
                    bottom: 0,
                },
                tabBarScrollEnabled: true,
                lazy: true,
                lazyPreloadDistance: 2
            }}
        >
            {
                routes.map((item: any) => <Tab.Screen key={ item.name } { ...item } />)
            }
        </Tab.Navigator>
    );
}