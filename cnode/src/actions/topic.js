
  import { GETTOPICLIST } from '../constants/topic';
  import { getJSON,postJSON } from '../utils/request';
  import api from '../server/api'

  export const getTopicList = (params) => {
    return async dispatch => {
        let result = await getJSON(api.getTopics,params);
        console.log(result);
        
    }
  }

