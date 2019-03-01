import Taro,{ Component, request } from '@tarojs/taro';
import { View,Text,Button,Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtDrawer } from 'taro-ui'
import { handleDrawer } from '../../actions/menu';
import cata from '../../assets/imgs/cata.png';
import login from '../../assets/imgs/login.png'
import './menu.less'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCata:{}
        }
    }
    //页面加载
    componentDidMount() {
        this.loadData()
    }
    //获取数据
    loadData = () => {
        let menu = this.props.menu;
        this.setState({
            currentCata:menu.currentCata
        })
    }
    //显示抽屉
    showDrawer = () => {
       this.props.handleDrawer &&  this.props.handleDrawer()

    }
    render() {
        let { currentCata } = this.state
        return (
            <View className="topicList-menu">
                <View className="topoc-wrapper">
                    <Image onClick={this.showDrawer} className="cata-image" src={ cata }/>
                    <Text>{currentCata.value}</Text>
                    <Image className='login-image'  src={ login }/>
                </View>
                <AtDrawer 
                    show={this.props.menu.showDrawer} 
                    mask={true}
                    items={['菜单1', '菜单2']}
                />
                
            </View>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        menu:state.menu
    }
}

export default connect(mapStateToProps,{ handleDrawer,})(Menu);
