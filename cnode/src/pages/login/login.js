import Taro,{ Component } from '@tarojs/taro';
import { View,Text,Button,Image, } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtInput } from 'taro-ui'
import './login.less'
import loginBg from '../../assets/imgs/bg.png';


class Login extends Component {
    config = {
        navigationBarTitleText:"天天共享"
    }
    render() {               
        return (
            <View className="wrapper">
               <View className="header">
                    <View className="header-left"></View>
                    <View className="header-center"></View>
                    <View className="header-right"></View>
               </View>
            </View>
            )
    }
}

export default Login;

