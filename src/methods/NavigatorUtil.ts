/*
 * 配置项目中所有的导航方法，解决this.props.navigation因路由层级问题无法跳转的问题
 * */
export default class NavigatorUtil {
    static navigation: any;

    /*
     * 返回上一页
     * */
    static goBack() {
        const navigation = NavigatorUtil.navigation;
        navigation.goBack();
    }

    /*
     * 跳转到指定页面
     * */
    static goPage(page: string, params?: object, type?: string) {
        const navigation = NavigatorUtil.navigation;
        if (type === 'replace') {
            navigation.replace(page);
        } else {
            navigation.navigate(page, params || {});
        }
    }
}
