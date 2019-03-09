import Taro,{ Component } from '@tarojs/taro';
import { View,Text,Button,Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './list.less'
import shopImage from '../../assets/imgs/shop.png';

class ListItem extends Component {
   render() {
       return (
        <View className="wrapper">
            <View className="list-title">私人订制</View>
            <View className="list">
                <View className="list-box">
                    <View className="list-item">
                        <Image src={shopImage} className="list-image"/>
                        <View className="list-item-desc">软弹速干男/女沐</View>
                        <View className="list-item-desc">浴拖鞋<Text className="list-item-price">￥29.4</Text></View>
                    </View>
                    <View className="list-item item-margin">
                        <Image src={shopImage} className="list-image"/>
                        <View className="list-item-desc">软弹速干男/女沐</View>
                        <View className="list-item-desc">浴拖鞋<Text className="list-item-price">￥29.4</Text></View>
                    </View>
                    <View className="list-item item-margin">
                        <Image src={shopImage} className="list-image"/>
                        <View className="list-item-desc">软弹速干男/女沐</View>
                        <View className="list-item-desc">浴拖鞋<Text className="list-item-price">￥29.4</Text></View>
                    </View>
                </View>
                <View className="list-box">
                    <View className="list-item">
                        <Image src={shopImage} className="list-image"/>
                        <View className="list-item-desc">软弹速干男/女沐</View>
                        <View className="list-item-desc">浴拖鞋<Text className="list-item-price">￥29.4</Text></View>
                    </View>
                    <View className="list-item item-margin">
                        <Image src={shopImage} className="list-image"/>
                        <View className="list-item-desc">软弹速干男/女沐</View>
                        <View className="list-item-desc">浴拖鞋<Text className="list-item-price">￥29.4</Text></View>
                    </View>
                    <View className="list-item item-margin">
                        <Image src={shopImage} className="list-image"/>
                        <View className="list-item-desc">软弹速干男/女沐</View>
                        <View className="list-item-desc">浴拖鞋<Text className="list-item-price">￥29.4</Text></View>
                    </View>
                </View>
                <View className="list-box">
                    <View className="list-item">
                        <Image src={shopImage} className="list-image"/>
                        <View className="list-item-desc">软弹速干男/女沐</View>
                        <View className="list-item-desc">浴拖鞋<Text className="list-item-price">￥29.4</Text></View>
                    </View>
                    <View className="list-item item-margin">
                        <Image src={shopImage} className="list-image"/>
                        <View className="list-item-desc">软弹速干男/女沐</View>
                        <View className="list-item-desc">浴拖鞋<Text className="list-item-price">￥29.4</Text></View>
                    </View>
                    <View className="list-item item-margin">
                        <Image src={shopImage} className="list-image"/>
                        <View className="list-item-desc">软弹速干男/女沐</View>
                        <View className="list-item-desc">浴拖鞋<Text className="list-item-price">￥29.4</Text></View>
                    </View>
                </View>
               
            </View>
        </View>
       )
   }
}

export default ListItem;
