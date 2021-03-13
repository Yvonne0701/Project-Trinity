// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad() {
  },
  b1:function(){
    wx.reLaunch({url:'../choice1/choice'});
  },
  b2:function(){
    wx.reLaunch({url:'../wiki/wiki'});
  },
  b3:function(){
    wx.reLaunch({url:'../choice2/choice'});
  },
  a1:function(){
    wx.reLaunch({url:'../test1/test'});
  },
  a2:function(){
    wx.navigateToMiniProgram({
      appId: 'wxd947200f82267e58',
      path:'pages/wjxqList/wjxqList?activityId=107506732'
    })
  },
  a3:function(){
    wx.reLaunch({url:'../test2/test'});
  }
})
