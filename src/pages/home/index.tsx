import React, {useState, useCallback, useEffect} from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, TextInput, View, Text, Image } from 'react-native';

import CommonIcon from 'components/commonIcon/index';

import { Global } from 'methods/config';
import NavigatorUtil from 'methods/NavigatorUtil';
import { toggleLoading, getStatusBarHeight } from 'methods/utils';

import TopTabNavigator from 'router/TopTabNavigator';

const { width } = Dimensions.get('window');

getStatusBarHeight();

export default function HomePage({ navigation }: any) {
    useEffect(() => {
        NavigatorUtil.navigation = navigation;
    }, []);
    return <View style={styles.pageBox}>
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.zbBox}
                activeOpacity={0.8}
                onPress={() => {}}
            >
                <CommonIcon name='zhibo' size={28}/>
            </TouchableOpacity>
            <View style={styles.iupBox}>
                <CommonIcon name='sousuo' size={18}/>
                <TextInput
                    style={styles.ssIup}
                    autoCapitalize={'none'}
                    clearButtonMode={'while-editing'}
                    placeholder={'探索新世界'}
                    placeholderTextColor={'#888'}
                    onChangeText={() => {}}
                />
            </View>
            <TouchableOpacity
                style={styles.qdBox}
                activeOpacity={0.8}
                onPress={() => {}}
            >
                <CommonIcon name='qiandao' size={26}/>
            </TouchableOpacity>
        </View>
        <View style={styles.topTars}>
            <TouchableOpacity
                style={styles.menuIcon}
            >
                <View style={styles.mOptl}/>
                <View style={{backgroundColor: '#fff'}}>
                    <CommonIcon name={'caidan'} size={20} />
                </View>
                <View style={styles.mOptr}/>
            </TouchableOpacity>
            <TopTabNavigator />
        </View>
    </View>
}

const styles = StyleSheet.create({
    pageBox: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: Global.satusBarHeight,
    },
    header: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    zbBox: {
        marginRight: 10,
    },
    iupBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    ssIup: {
        paddingLeft: 4,
        paddingVertical: 4,
        fontSize: 16,
        color: '#333',
        flex: 1,
        height: 35,
    },
    qdBox: {
        marginLeft: 10,
    },
    topTars: {
        flex: 1,
        position: 'relative',
    },
    menuIcon: {
        position: 'absolute',
        zIndex: 1,
        right: 0,
        top: 7,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    mOptl: {
        width: 10,
        height: 20,
        backgroundColor: '#fff',
        opacity: 0.5
    },
    mOptr: {
        width: 10,
        height: 20,
        backgroundColor: '#fff',
    }
});