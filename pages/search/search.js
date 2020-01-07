// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aroundCount: [
      {
        addr: '生命科学园',
        sub_line: '地铁站 - 昌平线'
      },
      {
        addr: '永丰南',
        sub_line: '地铁站 - 16号线'
      },
      {
        addr: '永丰',
        sub_line: '地铁站 - 16号线'
      },
      {
        addr: '海淀北部新区',
        sub_line: '商圈 - 海淀'
      },
      {
        addr: '六里屯三区',
        sub_line: '小区 - 海淀'
      }
    ]
  },
  handleTapBack() {
   wx.navigateBack();
  },
  handleTap(e) {
    console.log(e)
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

  }
})