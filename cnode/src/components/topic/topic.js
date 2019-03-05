import Taro,{ Component, connectSocket } from '@tarojs/taro';
import { ScrollView,Text,Button,Image, View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { getTopicList,getNextList } from '../../actions/topic';
import './topic.less'



class Topic extends Component {
    //获取数据
    componentDidMount() {
        let {page, limit } = this.props.topic
        this.props.getTopicList({page,limit});
    }
    //解发分页请求
    handleToLower = () => {
        let {page,limit} = this.props.topic;
        page += page + 1;
        this.props.getNextList({page,limit})

    }
    render() {
        let { list } = this.props.topic
        return (
            <ScrollView
            scrollY={true}
            onScrollToLower={this.handleToLower}
            className="scroll-view"
            >
                {
                    list.map((item,index) => {
                        return (
                            <View key={index}>
                                <Image src={item.author ? item.author.avatar_url:''}/>

                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topic:state.topic
    }
}

export default connect(mapStateToProps,{ getTopicList,getNextList })(Topic);
