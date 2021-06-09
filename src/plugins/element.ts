/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-06-08 10:23:50
 * @LastEditTime: 2021-06-09 14:33:45
 * @LastEditors: yangzai
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
    ElDropdownItem
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
}
