import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'张德志你好'
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

  handleClick = () => {
    this.setState({
      name:'123'
    })
  }

  render () {
    return (
      <View className='index'>
        <Text onClick={this.handleClick}>{this.state.name}</Text>
      </View>
    )
  }
}

