// pages/chat/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message_clear: '',
    message_content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = options.name;
    var recent = options.recent;
    var time = options.time;
    var avatar = options.avatar;
    wx.setNavigationBarTitle({ title: name });
    this.setData({
      chats: [
        { header: true, time: '5月20日 13：14' },
        {
          avatar: avatar, name: name, recent: '散落的棋子，躺在沟壑纵横的棋盘。正如乱世中的命运，不知何去何从，在烈火中重塑一个自己。天下，铭刻剑上的誓言，赌上一切的荣耀。只影归去，道家逍遥。名满天下，散魂流沙。兼爱非攻，墨家风骨。阴阳幻术，蜃楼巍巍。光阴素简，儒家风雅。'
        },
        { header: true, time: time },
        { avatar: avatar, name: name, recent: recent },
      ]
    })
  },

  sendmessage: function (e) {
    var that = this,
      date = new Date(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      second = date.getSeconds(),
      obj1 = {},
      obj2 = {};
    var pv = function (a) {
      return a < 10 ? "0" + a : a;
    };
    obj1 = {
      header: true,
      time: pv(hour) + ":" + pv(minute),
    }
    obj2 = {
      name: '端木蓉',
      avatar: '2',
      recent: that.data.message_content,
    }
    console.log(obj2.recent)
    let chats = that.data.chats;
    let objlast = chats[chats.length - 1];
    if (obj2.recent.trim() == '') { }
    else {
      chats.push(obj1);
      chats.push(obj2);
      this.setData({
        chats,
      })
    };
    this.setData({
      message_clear: '',
      message_content: ''
    });

  },

  bindText: function (e) {
    this.setData({
      'message_content': e.detail.value
    })

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

  }
})