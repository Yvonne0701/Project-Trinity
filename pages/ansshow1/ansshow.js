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
      key:'ans1',
      success:function(res){
        that.setData({
          tmp:that.mysort(res.data)
        });
        var tmpt;
        if(that.data.tmp[0].length+that.data.tmp[1].length+that.data.tmp[2].length+that.data.tmp[3].length>0){
          tmpt="最适合您的香味精油是:（推荐程度10分为满分）\n"
          for(var k=0;k<4;k++){
            if(that.data.tmp[k].length>0){
              tmpt+="&nbsp;&nbsp;";
              switch(k){
                case 0:tmpt+="早上:\n";break;
                case 1:tmpt+="下午:\n";break;
                case 2:tmpt+="晚上:\n";break;
                case 3:tmpt+="睡觉前:\n";break;
              }
              for(var i=0;i<Math.min(that.data.tmp[k].length,3);i++){
                tmpt+="&nbsp;&nbsp;&nbsp;&nbsp;"+that.data.tmp[k][i].value+"（推荐程度："+Math.ceil(that.data.tmp[k][i].percentage*10).toString()+"）\n";
              }
            }
          }
          tmpt+="\n尝试将他们混搭在一起，也可以选取其中您最喜欢的几个使用，当然也可以单独使用。请查询香味百科和混搭指南获得更多使用细节。 "
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