import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function () {
    return <View style={ styles.pageBox }>
        <Text>focusOn</Text>
    </View>;
}

const styles = StyleSheet.create({
    pageBox: {
        flex: 1,
        backgroundColor: '#ffdfd5',
        alignItems: 'center',
        justifyContent: 'center'
    }
});