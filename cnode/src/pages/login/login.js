import Taro,{ Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import Banner from '../../components/banner/banner'
import './login.less'
import { View,Text,Button,Image,Input,Swiper,SwiperItem  } from '@tarojs/components';
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
                <View className="tag"></View>
                <View className="main">
                    <View className="list"></View>
                </View>
            </View>
            )
    }
}

export default Login;

