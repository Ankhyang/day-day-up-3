/*
 * @Description: 
 * @Author: yangzai
 * @Date: 2021-06-08 10:23:50
 * @LastEditTime: 2021-08-26 14:35:32
 * @LastEditors: yanghuan
 */
import 'element-plus/dist/index.css';
import {
    ElScrollbar,
    ElMenu,
    ElSubMenu,
    ElMenuItem,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElTooltip,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElRow,
    ElCol,
    ElRadioGroup,
    ElRadioButton
} from 'element-plus'

export default function loadComponent(app: any) {
    app.use(ElScrollbar)
    app.use(ElMenu)
    app.use(ElSubMenu)
    app.use(ElMenuItem)
    app.use(ElBreadcrumb)
    app.use(ElBreadcrumbItem)
    app.use(ElTooltip)
    app.use(ElDropdown)
    app.use(ElDropdownMenu)
    app.use(ElDropdownItem)
    app.use(ElRow)
    app.use(ElCol)
    app.use(ElRadioGroup)
    app.use(ElRadioButton)
}
