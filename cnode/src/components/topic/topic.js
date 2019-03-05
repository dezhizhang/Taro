import Taro,{ Component, connectSocket } from '@tarojs/taro';
import { ScrollView,Text,Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { getTopicList } from '../../actions/topic';



class Topic extends Component {
    //获取数据
    componentDidMount() {
        let { limit } = this.props.topic
        this.props.getTopicList({limit});
    }
    render() {
        let { list } = this.props;
        return (
            <ScrollView>
               {
                   
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

export default connect(mapStateToProps,{ getTopicList })(Topic);
