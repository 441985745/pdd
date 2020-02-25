const request = require('../../utils/request')
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slides: [],
    categories: [{
      title: '乐尚国际卡丁车俱乐部',
      location: '南通市开发区永旺梦乐城4楼',
      openTime:'8:30-17:30'
    }, {
      title: '德宏广告',
      location: '南通市开发区永旺梦乐城3楼',
      openTime: '8:30-17:30'
    }, {
      title: '加速汽车服务站',
      location: '南通市开发区永旺梦乐城2楼',
      openTime: '8:30-17:30'
    }, {
      title: '唐三彩',
      location: '南通市开发区永旺梦乐城1楼',
      openTime: '8:30-17:30'
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
    // request('/slides')
    //   .then(res => {
    //     this.setData({ slides: res.data })
    //   })
    // request('/categories')
    //   .then(res => {
    //     this.setData({ categories: res.data })
    //   })

    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
