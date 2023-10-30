// 引入安装的axios库
import axios from 'axios'
// 封装axios请求方法request并导出该方法
export function request(config) {
    // 1.通过create方法创建axios实例instance
    const instance = axios.create({
        // 地址的公共前缀
        baseURL: 'http://localhost:3000/api/',
        // 设置超时时间
        timeout: 5000
    })

    // 2.使用axios的请求拦截器实现一些操作，
    // 比如某些网络请求（比如登录）,必须携带token信息
    //  2.1 请求拦截
    instance.interceptors.request.use(config => {
        //  设置token
        const token = localStorage.getItem('token');
        if(token){
            config.headers[Autherization] = token;
        }
        return config
    }, err => {
        // 请求失败拦截
        return err
    });
    //  2.2 响应拦截
    instance.interceptors.response.use(res => {
        // 响应成功拦截  可以直接返回res.data
        return res
    }, err => {
        // 响应失败拦截
        return err
    })

    // 3.发送真正的请求
    //  instance本身是一个promise对象,可以通过then方法获取
    return instance(config)
}