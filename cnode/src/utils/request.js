import Taro from '@tarojs/taro';
import api from '../server/api';

//get请求方法
export function getJSON(url,data) {
    return Taro.request({url:url,data:data,method:'GET'});
}
//post请求方法
export function postJSON(url,data) {
    return Taro.request({url:url,data:data,method:'POST'});
}
//获取请题列表
export async function getTopicList() {
   let result = await getJSON(api.getTopics);
   return result;

}





