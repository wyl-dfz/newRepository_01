/**
 * api接口统一管理
 */
import {get, post, patch, put} from '@/utils/http'
// 登录
export const login = p => post('login', p)
// 登出
export const logout = p => post('logout', p)

/**
 * 用户管理
 */
export const user_list = p => post('user/list', p)
export const user_add = p => post('user/add', p)
export const user_modify = p => post('user/modify', p)
export const user_del = p => post('user/del', p)
export const user_findModelByUserId = p => post('user/findModelByUserId', p)

/**
 * 角色管理
 */
export const role_list = p => post('role/list', p)
export const role_add = p => post('role/add', p)
export const role_modify = p => post('role/modify', p)
export const role_del = p => post('role/del', p)

/**
 * 菜单管理
 */
// 添加菜单
export const S003001 = p => post('/menu/S003001', p)
// 修改菜单
export const S003002 = p => post('/menu/S003002', p)
// 查询指定用户的菜单
export const S003003 = p => post('/menu/S003003', p)
// 查询所有菜单
export const S003004 = p => post('/menu/S003004', p)
// 查询菜单通过角色
export const S003005 = p => post('/menu/S003005', p)
// 启用菜单
export const S003006 = p => post('/menu/S003006', p)
// 停用菜单
export const S003007 = p => post('/menu/S003007', p)

/**
 * 日报相关
 */
export const daily_list = p => post('daily/list', p)
export const daily_exportDaily = p => post('daily/exportDaily', p)
