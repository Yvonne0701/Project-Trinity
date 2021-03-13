// pages/choice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items1:[{checked:false, value:0, name: '头痛'},
            {checked:false, value:1, name: '神经痛 （沿着神经方向的隐隐刺痛）'},
            {checked:false, value:2, name: '精神低落、沮丧'},
            {checked:false, value:3, name: '焦虑'},
            {checked:false, value:4, name: '抑郁'},
            {checked:false, value:5, name: '压力大'},
            {checked:false, value:6, name: '失眠'},
            {checked:false, value:7, name: '长期使用电脑的视觉以及坐姿压力'},
            {checked:false, value:8, name: '精神衰弱'},
            {checked:false, value:9, name: '日间犯困'},
            {checked:false, value:10, name: '工作学习效率低下'}],
    items2:[{checked:false, value:0, name: '木香调 （树木的香味，如松木、雪松、檀木等）'},
            {checked:false, value:1, name: '花香调 （花朵的香味，比如玫瑰，天竺葵，洋甘菊，迷迭香等）'},
            {checked:false, value:2, name: '果香调 （果子的香味，比如葡萄柚，苹果，杜松子等）'},
            {checked:false, value:3, name: '草香调 （草本植物或干草的味道，如岩兰草，玫瑰草等等）'},
            {checked:false, value:4, name: '辛香调 （比较刺激性的香味，如八角，胡椒，肉豆蔻等）'},
            {checked:false, value:5, name: '柑橘调 （柑橘类、芸香科植物极其花朵，如橙花，橘子，橙子，柠檬）'},
            {checked:false, value:6, name: '绿叶调或植物调 （植物叶子提取物的香味，比如丝柏，尤加利（桉树叶），薄荷等）'},
            {checked:false, value:7, name: '药香调 （中草药的味道，如广藿香 ）'},
            {checked:false, value:8, name: '乳香调 （温暖的香味，比如一种树木里面提取出来的乳香芳香树液）'},],
    items3:[{checked:false, value:0, name: '浓香'},
            {checked:false, value:1, name: '淡香'},
            {checked:false, value:2, name: '清新'},
            {checked:false, value:3, name: '馥郁'},
            {checked:false, value:4, name: '酸甜'},
            {checked:false, value:5, name: '香甜'},
            {checked:false, value:6, name: '醇香浑厚'},
            {checked:false, value:7, name: '清冷'},
            {checked:false, value:8, name: '温暖'},
            {checked:false, value:9, name: '热情'},
            {checked:false, value:10, name: '提神、苏醒'},
            {checked:false, value:11, name: '舒缓'},
            {checked:false, value:12, name: '镇静'},
            {checked:false, value:13, name: '刺激感官'},
            {checked:false, value:14, name: '富有东方气息'}],
    items4:[{checked:false, value:0, name: '早上'},
            {checked:false, value:1, name: '下午'},
            {checked:false, value:2, name: '晚上'},
            {checked:false, value:3, name: '睡觉时'},],
    alert:"color:red;opacity:0"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  checkboxChange1(e) {
    const items = this.data.items1
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value.toString() === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    this.setData({
      items1:items
    })
  },
  checkboxChange2(e) {
    const items = this.data.items2
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value.toString() === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    this.setData({
      items2:items
    })
  },
  checkboxChange3(e) {
    const items = this.data.items3
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value.toString() === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    this.setData({
      items3:items
    })
  },
  checkboxChange4(e) {
    const items = this.data.items4
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false
      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value.toString() === values[j]) {
          items[i].checked = true
          break
        }
      }
    }
    this.setData({
      items4:items
    })
  },

  onclicked:function(){
    var choices=[[],[],[],[]];
    for(var i=0;i<this.data.items1.length;i++){
      if(this.data.items1[i].checked==true)
        choices[0].push(i);
    }
    for(var i=0;i<this.data.items2.length;i++){
      if(this.data.items2[i].checked==true)
        choices[1].push(i);
    }
    for(var i=0;i<this.data.items3.length;i++){
      if(this.data.items3[i].checked==true)
        choices[2].push(i);
    }
    for(var i=0;i<this.data.items4.length;i++){
      if(this.data.items4[i].checked==true)
        choices[3].push(i);
    }
    if(choices[0].length==0||choices[3].length==0){
      this.setData({
        alert:"color:red;opacity:1"
      })
      return ;
    }
    const numtochar=["天竺葵","佛手柑","黑胡椒","德国洋甘菊","尤加利","榄香脂","乳香","柠檬","真正香蜂草","橙花","玫瑰草","广藿香","迷迭香","岩兰草","依兰依兰","罗勒","欧白芷","薄荷","肉豆蔻","罗马洋甘菊","快乐鼠尾草","丝柏","葡萄柚","蛇麻草","杜松子","薰衣草","柠檬草","橘","马郁兰","甜橙","苦橙叶","玫瑰","檀木","松树","桂花","苹果"];
    const choicemap=[[[3,19,20,4,25,26,28,17,31,12],[3,19,0,4,23,25,28,18,17,12,33],[15,20,25,9,32,13,14,29,1,27,2,6,24,26,31,12,33,35,34,22],[1,3,19,20,6,24,25,8,9,31,14],[1,14,31,20,32,0,9,29,25,7,10,11,13,35,34,22],[29,1,9,273,19,20,21,6,0,25,24,28,11,17,33,31,12,14,35],[3,19,23,25,27,28,8,9,30,31,32,13,14],[19,21,0,24,25,9,30,1,4,22,7,17,12],[15,4,17,33,12,16,21,5,22,0,25,7,10,33,31,35,34],[15,4,17,2,33,12,1],[1,4,0,22,7,17,12]],[[33,32,21],[0,31,3,19,28,12,34,14],[35,22,24],[13,25,20,26,23,16,8,10],[2,18,5],[15,9,29,27,7,1],[21,4,17,30],[11],[6]],[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],[18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],[1,7,8,9,12,21,22,26,30,15,17,33],[0,14,19,28,31,34],[1,7,8,12,22,26,27,15,35],[5,6,13,14,18,19,23,24,29,11,10,28,4,31],[5,6,11,21,23,24,32,21,18],[1,7,8,9,15,17,22,26,30,33],[5,6,31,14,16,18,19,20,21,24,32],[0,4,5,10,11,14,13,16,18,19,23,24,28,29,31],[1,2,4,5,7,8,11,12,15,17,26,29,30,9,35,34],[6,10,13,19,20,24,25,27,29,30,9,31,32,34,35],[0,1,3,6,7,8,9,10,12,15,20,21,22,25,26,27,30,31,32,34],[0,2,3,4,5,11,12,16,17,23,28],[0,4,5,11,16,18,23,28,32,34]],[[0,1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30,31,33,35],[0,1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30,31,33,35],[0,1,6,7,8,9,10,12,13,14,15,17,18,20,21,22,23,24,26,27,28,29,30,31,32,33,34,35],[3,19,21,25,27,31,32,34]]];
    var flag=new Array(numtochar.length),ctrl=1,ans=[[],[],[],[]];
    for(var i=0;i<numtochar.length;i++)flag[i]=0.0;
    for(var i=0;i<3;i++)ctrl+=choices[i].length;
    for(var i=0;i<3;i++)
      for(var j=0;j<choices[i].length;j++)
        for(var k=0;k<choicemap[i][choices[i][j]].length;k++)
          flag[choicemap[i][choices[i][j]][k]]+=1.0;
    for(var i=0;i<choices[3].length;i++){
      switch(choices[3][i]){
        case 0:console.log("早上:\n");break;
        case 1:console.log("下午:\n");break;
        case 2:console.log("晚上:\n");break;
        case 3:console.log("睡觉时:\n");break;
      }
      for(var j=0;j<choicemap[3][choices[3][i]].length;j++)
        flag[choicemap[3][choices[3][i]][j]]+=1.0;
      for(var j=0;j<flag.length;j++)
        if((flag[j])/ctrl>=0.5){
          ans[choices[3][i]].push({value:numtochar[j],percentage:flag[j]/ctrl});
          console.log(numtochar[j],flag[j]/ctrl);
        }
        for(var j=0;j<choicemap[3][choices[3][i]].length;j++)
          flag[choicemap[3][choices[3][i]][j]]-=1.0;
    }
    console.log(ans);
    wx.setStorage({
      key: 'ans1',
      data: ans
    });
    wx.reLaunch({
      url: '../ansshow1/ansshow',
    });
  }
})