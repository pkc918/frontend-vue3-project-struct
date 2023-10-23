import { InterceptorMethodType } from "./types";

export const serverConfig = {
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
    withCredentials: false,
    useTokenAuthorization: false,
}

// 请求拦截器
export const requestInterceptor: InterceptorMethodType = (config) => {
    console.log("request", config);
    return config
}

// 请求错误拦截器
export const requestInterceptorError: InterceptorMethodType = (err) => {
    console.log("request error");
    return Promise.reject(err)
}

// 响应拦截器
export const responseInterceptor: InterceptorMethodType = (res) => {
    console.log("response", res);
    return res
}

// 响应错误拦截器
export const responseInterceptorError: InterceptorMethodType = (error) => {
    console.log("response error");
    return Promise.reject(error)
}
