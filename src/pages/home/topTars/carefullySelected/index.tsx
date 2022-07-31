import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function () {
    useEffect(() => {
        console.log(1111);
    }, []);
    return <View style={ styles.pageBox }>
        <Text>carefullySelected</Text>
    </View>;
}

const styles = StyleSheet.create({
    pageBox: {
        flex: 1,
        backgroundColor: '#ffd5fb',
        alignItems: 'center',
        justifyContent: 'center'
    }
});