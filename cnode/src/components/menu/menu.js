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
           <Image src={ cata }/>
           <Text></Text>
           <Image src={ login }/>
        </View>
       )
   }
}

export default Menu;
