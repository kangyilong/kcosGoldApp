import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import CommonIcon from 'components/commonIcon/index';

import HomePage from 'pages/home/index';
import HotPage from 'pages/hot/index';
import FoundPage from 'pages/found/index';
import CoursePage from 'pages/course/index';
import MyPage from 'pages/my/index';

const Tab = createMaterialBottomTabNavigator();

const routes = [{
    name: 'Home',
    component: HomePage,
    options: {
        tabBarIcon: ({ color }: any) => {
            return <CommonIcon name="home" size={20} color={color}/>;
        },
        title: '首页',
    }
}, {
    name: 'Hot',
    component: HotPage,
    options: {
        tabBarIcon: ({ color }: any) => {
            return <CommonIcon name="hot" size={24} color={color}/>;
        },
        title: '沸点',
    }
}, {
    name: 'Found',
    component: FoundPage,
    options: {
        tabBarIcon: ({ color }: any) => {
            return <CommonIcon name="ic_found_line" size={20} color={color}/>;
        },
        title: '发现',
    }
}, {
    name: 'Course',
    component: CoursePage,
    options: {
        tabBarIcon: ({ color }: any) => {
            return <CommonIcon name="kecheng" size={20} color={color}/>;
        },
        title: '课程',
    }
}, {
    name: 'My',
    component: MyPage,
    options: {
        tabBarIcon: ({ color }: any) => {
            return <CommonIcon name="iconfonticon5" size={20} color={color}/>;
        },
        title: '我',
    }
}];

export default function () {
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            activeColor="blue"
            inactiveColor="#333"
            barStyle={{ backgroundColor: '#ddd' }}
            shifting={false}
            screenOptions={{}}
        >
            {
                routes.map(item => <Tab.Screen
                    key={ item.name }
                    {...item}
                />)
            }
        </Tab.Navigator>
    );
}
