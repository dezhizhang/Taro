import Taro,{ Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import Banner from '../../components/banner/banner'
import './login.less'
import { View,Text,Button,Image,Input,Icon  } from '@tarojs/components';
import { AtInput } from 'taro-ui'


class Login extends Component {
    config = {
        navigationBarTitleText:"网易严选"
    }
    state = {
        nav:['推荐','新品','众筹','福利']
    }
    render() { 
        let  { nav } = this.state;              
        return (
            <View className="wrapper">
                <View className="header">
                    <View className="header-left">
                        <Text>扫一扫</Text>
                    </View>
                    <View className="header-center">
                        <Input className='header-seach' placeholder="🔍搜索商品，共10628款好物" type='text'/>
                    </View>
                    <View className="header-right"></View>
                </View>
                <View className="nav">
                    <View className='nav-title'>推荐</View>
                </View>
                <View className="banner">
                    <Banner/>
                </View>
                <View className="tag">
                    <View className="tag-content">
                        <View className="tag-item">
                            <Icon  color='#994656' className="tag-icon" size='14' type='success'/>
                            <Text  className="tag-text">网易自营品牌</Text>
                        </View>
                        <View className="tag-item">
                            <Icon color='#994656' className="tag-icon" size='14' type='success'/>
                            <Text className="tag-text">30天无忧退换货</Text> 
                        </View>
                        <View className="tag-item">
                            <Icon color='#994656' className="tag-icon" size='14' type='success'/>
                            <Text className="tag-text">48小时快速退款</Text> 
                        </View>
                    </View>
                </View>
                <View className="main">
                    <View className="list"></View>
                </View>
            </View>
            )
    }
}

export default Login;

