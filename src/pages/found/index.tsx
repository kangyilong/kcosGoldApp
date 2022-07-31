import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function () {
    return <View style={styles.pageBox}>
        <Text>found - page</Text>
    </View>
}

const styles = StyleSheet.create({
    pageBox: {
        flex: 1,
        backgroundColor: '#88ffd4',
        alignItems: 'center',
        justifyContent: 'center',
    }
});