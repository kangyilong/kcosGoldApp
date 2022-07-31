import React, {useCallback, useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { toggleLoading, toggleHintDialog } from 'methods/utils';

export default function HotPage() {
    const onPress = useCallback(() => {
        toggleHintDialog('1');
    }, []);

    useEffect(() => {
        setTimeout(() => {
            toggleLoading('0');
        }, 1000);
    }, []);

    return <View style={styles.pageBox}>
        <Text onPress={onPress} style={styles.pageText}>
            hot-page
        </Text>
    </View>
}

const styles = StyleSheet.create({
    pageBox: {
        backgroundColor: '#c6a6ef',
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