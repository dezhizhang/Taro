import Taro,{ Component } from '@tarojs/taro';
import { View,Text,Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { getTopicList } from '../../actions/topic'

class Topic extends Component {
    handleChange = () => {
         this.props.getTopicList();
    }
    render() {
        return (<View onClick={this.handleChange}>
            1111
        </View>)
    }
}

const mapStateToProps = (state) => {
    return {
        topic:state.topic
    }
}

export default connect(mapStateToProps,{getTopicList})(Topic);
