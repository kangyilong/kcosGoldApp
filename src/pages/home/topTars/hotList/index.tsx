import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function () {
    return <View style={ styles.pageBox }>
        <Text>hotList</Text>
    </View>;
}

const styles = StyleSheet.create({
    pageBox: {
        flex: 1,
        backgroundColor: '#c8ddff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});