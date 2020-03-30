import ajax from './ajax'

// 1. 定义基础路径
/***** 登录界面接口 *********/
export const pwdLogin = (userName, pwd) => ajax('login', {
  userName,
  pwd,
}, 'POST');
