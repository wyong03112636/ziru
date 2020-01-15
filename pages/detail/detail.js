// pages/detail/detail.js
import _ from 'underscore'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // id:null,
    result:null,
    top:0
  },
  
  onPageScroll:_.throttle(function(ev){
    this.setData({
      top:ev.scrollTop
    })
  },2000),
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    // console.log(options)
    wx.request({
      url: `https://m.ziroom.com/wap/detail/room.json?city_code=110000&id=${options.id}`,
      success:res=>{
        this.setData({
          result:res.data.data
        })
      }
    }
    )
    /* this.setData({
      id:options.id
    }) */
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {

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