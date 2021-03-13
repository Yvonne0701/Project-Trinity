// pages/ansshow1/ansshow1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:"",
    tmp:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that=this;
    wx.getStorage({
      key:'ans2',
      success:function(res){
        res.data.sort(function() {
          return .5 - Math.random();
        })
        that.setData({
          tmp:that.mysort(res.data)
        });
        var tmpt;
        if(that.data.tmp.length>0){
          tmpt="最适合您的音乐是:（推荐程度10分为满分）\n\n"
          for(var i=0;i<Math.min(that.data.tmp.length,5);i++){
            tmpt+="&nbsp;&nbsp;"+that.data.tmp[i].value+"（推荐程度："+Math.ceil(that.data.tmp[i].percentage*10).toString()+"）\n";
          }
          tmpt+="\n "
        }else{
          tmpt="抱歉，目前没有适合您的香味精油推荐。"
        }
        that.setData({
          text:tmpt
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  mysort:function(array){
    for(var k=0;k<4;k++){
      for (var i=0;i<array[k].length-1;i++){
        for (var j=0;j<array[k].length-1-i;j++) {
            if (array[k][j].percentage < array[k][j + 1].percentage) {
                var temp = array[k][j];
                array[k][j] = array[k][j + 1];
                array[k][j + 1] = temp;
            }
        }
      } 
    }
    return array;
  }
})