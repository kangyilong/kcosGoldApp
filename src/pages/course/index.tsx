import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function () {
    return <View style={styles.pageBox}>
        <Text>course - page</Text>
    </View>
}

const styles = StyleSheet.create({
    pageBox: {
        flex: 1,
        backgroundColor: '#ffccde',
        alignItems: 'center',
        justifyContent: 'center',
    }
});