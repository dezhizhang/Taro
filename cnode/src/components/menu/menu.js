import Taro,{ Component } from '@tarojs/taro';
import { View,Text,Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './menu.less'

class Menu extends Component {
   render() {
       return (<View className="topicList-menu">Menu</View>)
   }
}

export default Menu;
