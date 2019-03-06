import Taro,{ Component, request } from '@tarojs/taro';
import { View,Text,Button,Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtDrawer } from 'taro-ui'
import { handleDrawer,handleCata,handleHideDrawer } from '../../actions/menu';
import cata from '../../assets/imgs/cata.png';
import login from '../../assets/imgs/login.png'
import './menu.less'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }
    //页面加载
    componentDidMount() {
        this.loadData()
    }
    //获取数据
    loadData = () => {
        
    }
    //显示抽屉
    showDrawer = () => {
       this.props.handleDrawer &&  this.props.handleDrawer()

    }
    //获取items
    getItmes = (data) => {
        return data.map(item => item.value)
    }
    //点击分类时触发
    handleItem = (index) => {
        let { cataData } = this.props.menu;
        let currentCata = cataData[index];
        if(currentCata.key !=this.props.menu.currentCata.key) {
            this.props.handleCata && this.props.handleCata(currentCata);
        }
    }
    //关闭时角发事件
    handleClose = () => {
       this.props.handleHideDrawer && this.props.handleHideDrawer();
    }
    //用户登录
    handleLogin = () => {
        Taro.navigateTo({
            url: '/pages/login/login'
        })
    }
    render() {
        let { currentCata,cataData } = this.props.menu;
        let items = this.getItmes(cataData)  //分类列表
        return (
            <View className="topicList-menu">
                <View className="topoc-wrapper">
                    <Image onClick={this.showDrawer} className="cata-image" src={ cata }/>
                    <Text>{currentCata.value}</Text>
                    <Image onClick={this.handleLogin} className='login-image'  src={ login }/>
                </View>
                <AtDrawer 
                    show={this.props.menu.showDrawer} 
                    mask={true}
                    items={items}
                    onItemClick={this.handleItem}
                    onClose={this.handleClose}
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

export default connect(mapStateToProps,{ handleDrawer,handleCata,handleHideDrawer})(Menu);
