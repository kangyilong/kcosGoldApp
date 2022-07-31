import React, {useCallback, useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { toggleLoading } from 'methods/utils';

export default function MyPage({ navigation, route }: any) {
    const onPress = useCallback(() => {
        navigation.push('Page01');
    }, []);

    useEffect(() => {
        setTimeout(() => {
            toggleLoading('0');
        }, 1000);
        console.log(111, route.params);
    }, []);

    return <View style={styles.pageBox}>
        <Text onPress={onPress} style={styles.pageText}>
            my-page
        </Text>
    </View>
}

const styles = StyleSheet.create({
    pageBox: {
        backgroundColor: '#9c7cef',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageText: {
        fontSize: 18,
        color: '#333',
        fontWeight: '600',
    }
});