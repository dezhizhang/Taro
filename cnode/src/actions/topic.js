
import { GETTOPICLIST,GETNEXTLIST } from '../constants/topic';
import { getJSON,postJSON } from '../utils/request';
import api from '../server/api'
//请求首页数据
export const getTopicList = (params) => {
    return async dispatch => {
        let result = await getJSON(api.getTopics,params)
        if(result.data.success) {
            dispatch({type:GETTOPICLIST,list:result.data.data})
        }
    }
}

//请求下一页数据
export const getNextList = (params) => {
    return async dispatch => {
        let result = await getJSON(api.getTopics,params);
        if(result.data.success) {
            if(result.data.data.length > 0){
                dispatch({type:GETNEXTLIST,list:result.data.data,page:params.page})
            }
          
        }
    }
}

