// pages/friends/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [
      { icon: 'new_friends', title: '新的朋友', unread: 1 },
      { icon: 'group', title: '群聊' },
      { icon: 'tag', title: '标签' },
      { icon: 'mp', title: '公众号' },
    ],
    friends: [
      { header: true, name: 'D' },
      { avatar: '2', name: '端木蓉' },
      { avatar: '9', name: '大司命' },
      { header: true, name: 'G' },
      { avatar: '0', name: '高月' },
      { header: true, name: 'J' },
      { avatar: '3', name: '荆天明' },
      { header: true, name: 'N' },
      { avatar: '8', name: '弄玉' },
      { header: true, name: 'S' },
      { avatar: '6', name: '石兰' },
      { avatar: '10', name: '少司命' },
      { header: true, name: 'W' },
      { avatar: '5', name: '卫庄' },
      { header: true, name: 'X' },
      { avatar: '1', name: '雪女' },
      { avatar: '4', name: '项少羽' },
      { header: true, name: 'Z' },
      { avatar: '7', name: '紫女' },
      { avatar: '11', name: '张良' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindNavigation: function (e) {
    var name = e.currentTarget.dataset.name,
      avatar = e.currentTarget.dataset.avatar;
    wx.navigateTo({
      url: '/pages/details/index?name=' + name + '&avatar=' + avatar,
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