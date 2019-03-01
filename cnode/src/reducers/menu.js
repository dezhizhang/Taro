
const MENU_STATE = {
    cataData: [
        {key:'all',value:'全部'},
        {key:'good',value:'精华'},
        {key:'share',value:'分享'},
        {key:'ask',value:'问答'},
        {key:'job',value:'职位'},
        {key:'dev',value:'客户端测试'}
    ],
    currentCata:{key:'all',value:'全部'},
    showDrawer:false,

}

export default function menu (state = MENU_STATE, action) {
  switch (action.type) {
    case 'showDrawer':
        return {...state,showDrawer:true};
    case 'hideDrawer':
        return {...state,showDrawer:false};
    case 'changeCata':
        return {...state,showDrawer:action.currentCata}
    default:
        return {...state}
  }
}
