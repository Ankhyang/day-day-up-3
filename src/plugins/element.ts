/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-06-08 10:23:50
 * @LastEditTime: 2021-08-25 15:53:46
 * @LastEditors: yanghuan
 */
import 'element-plus/lib/theme-chalk/index.css'
import {
    ElScrollbar,
    ElMenu,
    ElSubmenu,
    ElMenuItem,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElTooltip,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElRow,
    ElCol
} from 'element-plus'

export default function loadComponent(app: any) {
    app.use(ElScrollbar)
    app.use(ElMenu)
    app.use(ElSubmenu)
    app.use(ElMenuItem)
    app.use(ElBreadcrumb)
    app.use(ElBreadcrumbItem)
    app.use(ElTooltip)
    app.use(ElDropdown)
    app.use(ElDropdownMenu)
    app.use(ElDropdownItem)
    app.use(ElRow)
    app.use(ElCol)
}