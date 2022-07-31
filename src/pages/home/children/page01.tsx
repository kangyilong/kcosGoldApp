import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function () {
    return <View style={styles.pageBox}>
        <Text>page01</Text>
    </View>
}

const styles = StyleSheet.create({
    pageBox: {
        flex: 1,
        backgroundColor: '#cccdff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});