// pages/choice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items1:[{checked:false, value:0, name: '一段时间后注意力涣散'},
            {checked:false, value:1, name: '一段时间后疲惫/乏力'},
            {checked:false, value:2, name: '一段时间后思维活跃度降低'},
            {checked:false, value:3, name: '头晕情绪低落'},
            {checked:false, value:4, name: '冲动易怒焦虑'}],
    items2:[{checked:false, value:0, name: '古典（包括但不限于古典主义音乐时期的作品）'},
            {checked:false, value:1, name: '冥想音乐（白噪音元素）/轻柔纯音乐'},
            {checked:false, value:2, name: '随意/无特殊要求'}],
    items3:[{checked:false, value:0, name: '轻柔/舒缓/空灵（白噪音）'},
            {checked:false, value:1, name: '中速/严谨/理性（巴洛克）'},
            {checked:false, value:2, name: '典雅/诗意/均衡（古典）'}],
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

  onclicked:function(){
    var choices=[[],[],[]],ctrl=0;
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
    ctrl+=choices[0].length+choices[1].length+choices[2].length;
    if(choices[0].length==0||choices[1].length==0||choices[2].length==0){
      this.setData({
        alert:"color:red;opacity:1"
      })
      return ;
    }
    const numtochar=["Gymnopedie Nr. 1","Merry-Go-Round","Salut D’amour Op. 12","Humoreska","Serenade","La Mer:I. De L'aube A Midi Sur La Mer","Pinô","優しい風","Cherry Wood Paddle","Sea Breeze","当安静的公园披上了夜网, 东方的夜莺徒然向玫瑰花歌唱","Shizukana Umi","Morning Dew","α","Cedar Rapids","春蝉","フローティング・スペース","過ぎ去りし夏","Piano No Mori","Calm The Mind","ζ","Up Where We Belong","Park","Origins","Serein","Clair De Lune","Concerto For Piano And Orchestra No.5 In F Minor, BMV 1056: II, Largo","Romance From the Gadfly","Goldberg Variations, BWV 988:Aria","Piano Sonata No. 11 in A Major, K. 331:1b. Variation 2","Ballade No.1 In G Minor, Op.23","Meditation:Sara Chang","Solomon: Entrance Of The Queen Of Sheba 114","Préludes Book I:I. Danseuses de Delphes (Lent et grave)","Symphony No. 34 in C Major, K. 338: Andante di molto piu` tosto allegretto"," Sonata No.4 in G major Hob.XVI, G1:II Menuetto","Nocturne No. 10 in A Flat Major, Op. 32, No. 2","Air","Etudes, Op. 109: Awaking in the Woods","French Suite No. 4 in E-flat Major, BWV 815:VII. Gigue","A Slow Waltz","53º 40,6 N 008º 06,3 E","The Swan, \"LK243\"","Etudes, Op. 109: The Fountain","Sonata For Violin And Piano No. 2 In A Major, Op. 100:II. Andante tranquillo","Romance for Guitar and String Orchestra","Partita No. 4, In D Major, BWV 828:III. Courante","Sonata for Piano and Violin in A, K.305:2c. Variation 2","Les petits riens, K.app.10 (ballet):No.15 Gavotte gracieuse","Library Sounds - Nature Sounds for Relaxation, Meditation, Studying & Deep Sleep- Part 2","Quiet Jungle Spa","Crickets and Rain","Small Stream","Singing Birds","Soothing Nature Sounds","Piano Sonata No.4 in G major Hob.XVI, G1:II Menuetto"];
    const choicemap=[[[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],[0,25,26,27,28,29,30,31,32,33,34,1,35,2,36,3,37,4,38,39,40,41,42,43,44,45,46,47,48,5],[42,43,44,45,46,47,37,38,39,29,32,35],[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,49,50,51,52,53,54,55],[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,49,50,51,52,53,54,55,28,39,37,38,46,29,56]],[[0,25,26,27,28,29,30,31,32,33,34,1,35,2,36,3,37,4,38,39,40,41,42,43,44,45,46,47,48,5],[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,49,50,51,52,53,54,55],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55]],[[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,49,50,51,52,53,54,55],[28,39,37,46,26],[0,25,27,29,30,31,32,33,34,1,35,2,36,3,4,38,40,41,42,43,44,45,47,48,5]]];
    var flag=new Array(numtochar.length),ans=[];
    for(var i=0;i<numtochar.length;i++)flag[i]=0.0;
    for(var i=0;i<3;i++)
      for(var j=0;j<choices[i].length;j++)
        for(var k=0;k<choicemap[i][choices[i][j]].length;k++)
          flag[choicemap[i][choices[i][j]][k]]+=1;
    console.log(flag);
    for(var i=0;i<numtochar.length;i++){
      if(flag[i]/ctrl>=0.5){
        ans.push({value:numtochar[i],percentage:flag[i]/ctrl});
        console.log(numtochar[i],flag[i]/ctrl);
      }
    }
    wx.setStorage({
      key: 'ans2',
      data: ans
    });
    wx.reLaunch({
      url: '../ansshow2/ansshow',
    });
  }
})