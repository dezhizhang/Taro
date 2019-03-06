import Taro,{ Component } from '@tarojs/taro';
import { View,Text,Button,Image, } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtInput } from 'taro-ui'
import loginBack from '../../assets/imgs/loginBack.png';
import head from '../../assets/imgs/head.png';
import './login.less'

class Login extends Component {
    config = {
        navigationBarTitleText:"登录"
    }
    handleChange = (ev) => {
        console.log('111');
    } 
    render() {
        return (
            <View className="login-header">
                <View className="login-box">
                    <Image className="login-back" src={loginBack}/>
                    <Image className="login-avatar" src={head}/>
                </View>
                <View>
                <AtInput
                    name='value'
                    title='用户名'
                    type='text'
                    placeholder='请输入用户名'
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                </View>
                <View>
                <AtInput
                    name='value'
                    title='密　码'
                    type='password'
                    placeholder='请输入密码'
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                </View>
                <View>
                    <Button type="primary">登录</Button>
                </View>
            </View>
            )
    }
}

export default Login;

