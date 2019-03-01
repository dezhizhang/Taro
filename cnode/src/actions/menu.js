
  import { SHOWDRAWER,HIDEDRAWER,CHANGECATE } from '../constants/menu' 
  export const handleDrawer = () => {
    return {
      type: SHOWDRAWER
    }
  }
  //改变分类
  export const handleCata = (payload) => {
    return {
      type:CHANGECATE,
      payload
    }
  }
  //关闭面板时触发
  export const handleHideDrawer = () => {
    return {
      type:HIDEDRAWER
    }
  }


  
