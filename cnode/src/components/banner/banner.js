import Taro,{ Component } from '@tarojs/taro';
import { View,Text,Button,Swiper,SwiperItem,Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import image1 from '../../assets/imgs/ts1.jpg';
import image2 from '../../assets/imgs/ts2.jpg'
import image3 from '../../assets/imgs/ts3.jpg'
import image4 from '../../assets/imgs/ts4.jpg'
import image5 from '../../assets/imgs/ts5.jpg'


class Banner extends Component {
   render() {
       return (
        <View className="wrapper">
            <Swiper
                className='swiper'
                indicatorColor='#999'
                indicatorActiveColor='#333'
                vertical={false}
                circular
                indicatorDots
                autoplay>
                <SwiperItem>
                   <Image className="swiper-image" src={image1}/>
                </SwiperItem>
                <SwiperItem>
                    <Image className="swiper-image" src={image2}/>
                </SwiperItem>
                <SwiperItem>
                    <Image className="swiper-image" src={image3}/>
                </SwiperItem>
                <SwiperItem>
                    <Image className="swiper-image" src={image4}/>
                </SwiperItem>
                <SwiperItem>
                    <Image className="swiper-image" src={image5}/>
                </SwiperItem>
            </Swiper>
        </View>
       )
   }
}

export default Banner;
