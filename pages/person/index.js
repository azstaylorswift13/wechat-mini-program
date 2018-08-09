// pages/person/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [
      { header: true },
      { icon: 'wallet', name: '钱包' },
      { header: true },
      { icon: 'collection', name: '收藏' },
      { icon: 'album', name: '相册' },
      { icon: 'cards', name: '卡包' },
      { icon: 'expression', name: '表情' },
      { header: true },
      { icon: 'set', name: '设置' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindNavigation:function(e){
    if (e.currentTarget.dataset.index===1){
      wx.navigateTo({
        url: '/pages/wallet/index',
      })
    }
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