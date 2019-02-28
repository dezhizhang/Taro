import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button,Input } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'好利来传媒'
    }
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

 

  render () {
    return (
      <View className='index'>
        
      </View>
    )
  }
}

