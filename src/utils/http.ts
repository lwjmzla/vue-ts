import axios from 'axios';
import { Loading, Message } from 'element-ui';

const http = axios.create({
  baseURL: '',
  timeout: 60000
});

axios.defaults.headers.post['Content-Type'] = 'application/json';

http.interceptors.request.use(
  function(config: any) {
    // let dateNow = new Date();
    // let requestTime = dateNow.getTime();
    // let requestId = dateFormat(dateNow, 'yyyy-MM-dd-hh-ss-mm').replace(/-/g, '') + requestTime.toString().substring(0, 6);
    // let sign = sha256(appKey + appSecret + requestId + requestTime).toLowerCase();
    // config.url += `?appKey=${appKey}&requestId=${requestId}&requestTime=${requestTime}&sign=${sign}`;
    // let token = store.state.user.userInfo.token;
    // config.headers.token = token;
    return config;
  },
  function(error: any) {
    // 全局请求异常处理
    // 如果请求超时，这里可以进行处理
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function(response: any) {
    // 统一的服务器状态码判断处理
    // const code = '200';
    // const data = response.data || {};
    // if (data.code === '200' || data.error_code === '0') {
    //   return data;
    // } else {
    //   data.message = data.message || data.msg || data.error_msg;
    //   return Promise.reject(data);
    // }
    return Promise.resolve(response);
  },
  function(error: any) {
    // 全局响应异常处理
    return Promise.reject(error);
  }
);

export default http;
