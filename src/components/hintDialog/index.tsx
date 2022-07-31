import React from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { HINT_STATUS_NUM } from 'methods/config';

const { width, height } = Dimensions.get('window');

function mapStateToPage(state: any) {
    return {
        ...state.hintDialog.hintParams,
        isShow: state.hintDialog.hintParams.hintStatus === HINT_STATUS_NUM.SHOW
    }
}

interface HintInterface {
    isShow?: boolean,
    text?: string,
    textStyles?: any,
    TextComponent?: any
}
function HintDialog({ isShow, text, textStyles, TextComponent }: HintInterface) {
    if (!isShow) return null;
    return <View style={styles.hintPage}>
        {
            TextComponent
                ? <TextComponent />
                : <View style={styles.hintBox}>
                    <Text style={{...styles.hintText, ...(textStyles || {})}}>{ text }</Text>
                </View>
        }
    </View>
}

const styles = StyleSheet.create({
    hintPage: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 11,
        alignItems: 'center',
        paddingTop: height / 5,
    },
    hintBox: {
        maxWidth: width / 2,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignItems: 'center',
    },
    hintText: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center',
    }
});

export default connect(mapStateToPage)(HintDialog);