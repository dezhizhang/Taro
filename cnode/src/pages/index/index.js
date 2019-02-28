import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components';
import { getTopicList } from '../../utils/request';
import './index.less'



class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentDidMount () {
    getTopicList().then((res) => {
      console.log(res);
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View>hello</View>
      </View>
    )
  }
}

export default Index
