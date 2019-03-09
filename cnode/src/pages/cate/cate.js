import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components';
import './cate.less'
import Menu from '../../components/menu/menu';
import Topic from '../../components/topic/topic';


class Cate extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount () {
   
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Menu/>
        <Topic/>
      </View>
    )
  }
}

export default Cate
