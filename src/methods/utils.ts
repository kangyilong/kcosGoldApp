import { Platform, Dimensions, NativeModules, StatusBar } from 'react-native';
import store from 'reduxs';
import { showFillLoading, hideFillLoading, showHintDialog, hideHintDialog } from 'reduxs/action';
import { HINT_STATUS_NUM, Global } from 'methods/config';

const { width, height } = Dimensions.get('window');

/*
* @method 获取状态栏高度
* */
export function getStatusBarHeight() {
    const { StatusBarManager } = NativeModules;
    if (Platform.OS === 'ios') {
        Global.satusBarHeight = StatusBarManager.HEIGHT;
    } else {
        // @ts-ignore
        Global.satusBarHeight = StatusBar.currentHeight;
    }
}

/*
* @method 显示/隐藏 loading
* @pram type 1 显示  0 隐藏
* */
interface InterfaceloadConfig {
    color?: string,
    text?: any
}
export function toggleLoading(type: string, loadConfig?: InterfaceloadConfig) {
    switch (type) {
        case HINT_STATUS_NUM.SHOW:
            return store.dispatch(showFillLoading(loadConfig));
        case HINT_STATUS_NUM.HIDE:
            return store.dispatch(hideFillLoading());
    }
}

/*
* @method 显示/隐藏 提示框
* @pram type 1 显示  0 隐藏
* */
export function toggleHintDialog(type: string) {
    switch (type) {
        case HINT_STATUS_NUM.SHOW:
            return store.dispatch(showHintDialog({text: '提示语提示语提示语提示语'}));
        case HINT_STATUS_NUM.HIDE:
            return store.dispatch(hideHintDialog());
    }
}

// 判断 ios 是否为曲面屏
export function isFullScreen() {
    return Platform.OS === 'ios' ? height / width > 1.8 : false;
}