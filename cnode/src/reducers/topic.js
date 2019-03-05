import { GETTOPICLIST,GETNEXTLIST } from '../constants/topic'
const TOPIC_STATE = {
    page:1,
    limit:20,
    list:[]
}

export default function topic(state=TOPIC_STATE,action) {
    switch(action.type) {
        case GETTOPICLIST:
        return {...state,list:action.list}
        case GETNEXTLIST:
        return {...state,list:state.list.concat(action.list)}
        default:
        return {...state}
    }
}