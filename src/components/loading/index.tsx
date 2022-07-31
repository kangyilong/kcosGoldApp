import React from 'react';
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { HINT_STATUS_NUM } from 'methods/config';

function mapStateToPage(state: any) {
    return {
        ...state.fillLoading.loadParams,
        isShow: state.fillLoading.loadParams.fillLoadingStatus === HINT_STATUS_NUM.SHOW
    }
}

interface PropsInterface {
    isShow?: boolean,
    color?: string,
    text?: any,
    txtStyles?: any
}
function FillLoading({ isShow, color, text, txtStyles }: PropsInterface) {
    if (!isShow) return null;
    const OwnerText =
        typeof text === 'function'
            ? text
            : () => <Text style={{ color, ...styles.defText, ...(txtStyles || {}) }}>
                { text }
            </Text>;
    return <View style={styles.loadBox}>
        <ActivityIndicator color={color}/>
        <View style={styles.txtBox}>
            { OwnerText() }
        </View>
    </View>
}

const styles = StyleSheet.create({
    loadBox: {
        position: 'absolute',
        flex: 1,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 10,
        alignItems: 'center',
        paddingTop: 100,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    txtBox: {
        marginTop: 20,
        alignItems: 'center',
    },
    defText: {
        fontSize: 16
    }
});

export default connect(mapStateToPage)(FillLoading);