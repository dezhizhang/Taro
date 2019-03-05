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
        this.props.getNextList({page:(page + 1),limit})
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
                            <View key={index} className="topic-list">
                                <Image className="acatar_image" src={item.author ? item.author.avatar_url:''}/>
                                <View className='topic-right'>
                                    <View className="topic-title">
                                        <Text>置顶</Text>
                                        <Text>{item.title}</Text>
                                    </View>
                                    <View className="topic-info">
                                        <Text>{item.author? item.author.loginname:''}</Text>
                                        <Text>{item.reply_count}/{item.visit_count}</Text>
                                        <Text>创建时间：{item.create_at}</Text>
                                    </View>
                                </View>
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
