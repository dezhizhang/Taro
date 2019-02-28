const baseURL = 'https://cnodejs.org/api/v1';

export default {
    getTopics:baseURL + '/topics',     //获取主题
    getTopicDetail:baseURL + '/topic', //获取主题详情
    themeCollect:baseURL + '/topic_collect/collect', //主题收藏
    cancnelThemeCollection:baseURL + '/topic_collect/de_collect', // 取消主题
    getUserTopicCollect:baseURL + '/topic_collect', //用户所收藏的主题
    getUserDetail:baseURL + '/user', //用户详情
    checkedUserToken:baseURL + '/accesstoken', //验证 accessToken 的正确性
    getMessageCount:baseURL + '/message/count', //获取未读消息数
    getMessage:baseURL + '/messages', //获取已读和未读消息
    markAllReady:baseURL + '/message/mark_all', //标记全部已读
    markOneMessage:baseURL + '/message/mark_one',//标记单个消息为已读

}