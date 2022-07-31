import {
    SHOW_FILL_LOADING,
    HIDE_FILL_LOADING,
    SHOW_HINT_DIALOG,
    HIDE_HINT_DIALOG
} from './types';

export function showFillLoading(params = {}) {
    return {
        ...params,
        type: SHOW_FILL_LOADING,
    }
}

export function hideFillLoading() {
    return {
        type: HIDE_FILL_LOADING
    }
}

export function showHintDialog(params = {}) {
    return {
        ...params,
        type: SHOW_HINT_DIALOG
    }
}

export function hideHintDialog() {
    return {
        type: HIDE_HINT_DIALOG
    }
}