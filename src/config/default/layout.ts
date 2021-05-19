/*
 * @Description: 布局默认配置
 * @Author: yangzai
 * @Date: 2021-05-19 10:46:21
 * @LastEditTime: 2021-05-19 10:48:33
 * @LastEditors: yangzai
 */
interface LayoutSettings {
    showSettings: boolean,
    showTagsView: boolean,
    showSidebarLogo: boolean,
    fixedHeader: boolean,
    sidebarTextTheme: boolean
}

const layoutSettings: LayoutSettings = {
    showSettings: true,
    showTagsView: true,
    showSidebarLogo: true,
    fixedHeader: false,
    sidebarTextTheme: true
}

export default layoutSettings