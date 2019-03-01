import Taro,{ Component, request } from '@tarojs/taro';
import { View,Text,Button,Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import cata from '../../assets/imgs/cata.png';
import login from '../../assets/imgs/login.png'
import './menu.less'


class Menu extends Component {
   render() {
       return (
        <View className="topicList-menu">
           <View className="topoc-wrapper">
                <Image className="cata-image" src={ cata }/>
                <Text>全部</Text>
                <Image className='login-image'  src={ login }/>
           </View>
        </View>
       )
   }
}

export default Menu;
