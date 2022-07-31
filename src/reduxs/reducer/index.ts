import { combineReducers } from 'redux';

import {
    SHOW_FILL_LOADING,
    HIDE_FILL_LOADING,
    SHOW_HINT_DIALOG,
    HIDE_HINT_DIALOG
} from 'reduxs/action/types';
import { HINT_STATUS_NUM } from 'methods/config';

// 处理fillLoading组件
function fillLoading(state = { loadParams : {} }, { type, color, text, txtStyles }: any) {
    switch (type) {
        case SHOW_FILL_LOADING:
            return {
                ...state,
                loadParams: {
                    color,
                    text,
                    txtStyles,
                    fillLoadingStatus: HINT_STATUS_NUM.SHOW
                }
            };
        case HIDE_FILL_LOADING:
            return {
                ...state,
                loadParams: {
                    ...state.loadParams,
                    fillLoadingStatus: HINT_STATUS_NUM.HIDE
                }
            };
        default:
            return state
    }
}

// 处理hintDialog组件
function hintDialog(state = { hintParams: {} }, { type, text, textStyles, TextComponent }: any) {
    switch (type) {
        case SHOW_HINT_DIALOG:
            return {
                ...state,
                hintParams: {
                    text,
                    textStyles,
                    TextComponent,
                    hintStatus: HINT_STATUS_NUM.SHOW
                }
            };
        case HIDE_HINT_DIALOG:
            return {
                ...state,
                hintParams: {
                    ...state.hintParams,
                    hintStatus: HINT_STATUS_NUM.HIDE
                }
            };
        default:
            return state
    }
}

export default combineReducers({
    fillLoading,
    hintDialog
})