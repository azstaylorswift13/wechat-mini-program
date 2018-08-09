// pages/details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details_name: '',
    details_wxname: '',
    details_avatar: '0',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var randomString = function () {
      var len = 10;
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijkmnopqrstuvwxyz123456789';
      var maxPos = chars.length;
      var pwd = '';
      for (var i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    };
    var wxname = randomString();
    var name = options.name;
    var avatar = options.avatar;
    console.log(wxname)
    this.setData({
      details_name: name,
      details_wxname: wxname,
      details_avatar: avatar
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