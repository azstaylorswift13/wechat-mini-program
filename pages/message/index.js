// pages/message/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: [
      { avatar: '0', name: '高月', recent: '既然未来是未知的，那么又何必认定它是可怕的呢？', time: '刚刚' },
      { avatar: '1', name: '雪女', recent: '如果真的有天涯海角，你愿意跟我去吗？', time: '一分钟前' },
      { avatar: '2', name: '端木蓉', recent: '你想救的人有很多，可我想救的只有你一个。', time: '13:14' },
      { avatar: '3', name: '荆天明', recent: '我整天嘻嘻哈哈，没心没肺，可这并不代表我不在乎！', time: '05:20' },
      { avatar: '4', name: '项少羽', recent: '这不是我在逼你，是现实在逼我们！', time: '昨天' },
      { avatar: '5', name: '卫庄', recent: '弱者没有资格要求公平。', time: '5月17日' },
      { avatar: '6', name: '石兰', recent: '你可以放开我的手了。', time: '5月17日' },
      { avatar: '7', name: '紫女', recent: '你身边美女如云 就算要伤公子心 也轮不到我！', time: '5月17日' },
      { avatar: '8', name: '弄玉', recent: '我本就不该出现在任何人的生命中。 ', time: '5月16日' },
      { avatar: '9', name: '大司命', recent: '你所有的记忆，就算隐藏在头脑的最深处，我也能把它挖出来。', time: '5月16日' },
      { avatar: '10', name: '少司命', recent: '。。。', time: '2017-5-20' },
      { avatar: '11', name: '张良', recent: '这听起来更像一个优雅的借口！', time: '2017-5-20' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    var nowDate = year + "-" + month + "-" + day;
    console.log(nowDate);
  },

  bindNavigation: function (e) {
    var name = e.currentTarget.dataset.name,
      recent = e.currentTarget.dataset.recent,
      time = e.currentTarget.dataset.time,
      avatar = e.currentTarget.dataset.avatar;
    wx.navigateTo({
      url: '/pages/chat/index?name=' + name + '&recent=' + recent + '&time=' + time + '&avatar=' + avatar,
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
    wx.showNavigationBarLoading();
    setTimeout(function () {
      wx.stopPullDownRefresh();
      wx.hideNavigationBarLoading();
    }, 1000);
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