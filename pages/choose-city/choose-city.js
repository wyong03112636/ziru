// pages/choose-city/choose-city.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: [
      {
        name: '北京',
        city_code: '110000'
      },
      {
        name: '上海',
        city_code: '310000'
      },
      {
        name: '深圳',
        city_code: '440300'
      },
      {
        name: '杭州',
        city_code: '330100'
      },
      {
        name: '南京',
        city_code: '320100'
      },
      {
        name: '成都',
        city_code: '510100'
      },
      {
        name: '武汉',
        city_code: '420100'
      },
      {
        name: '广州',
        city_code: '440100'
      },
      {
        name: '天津',
        city_code: '120000'
      },
    ],
    currentCity: '',
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
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        that.curCity(res.longitude, res.latitude)
      }
    })
  },
  curCity: function(longitude, latitude) {
    let that = this;
    wx.request({
      url: `http://api.map.baidu.com/reverse_geocoding/v3/?ak=Ys3YxLFaygNRFDWGlQnCR5TismgVb9sA&output=json&coordtype=wgs84ll&location=${latitude},${longitude}`,
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
          currentCity: res.data.result.addressComponent.city,
        })
      }
    })
  },
  handleTaoChooseCity(e) {
    wx.navigateTo({
      url: `../index/index?city_name=${e.currentTarget.dataset.city}&city_code=${e.currentTarget.dataset.citycode}`,
    })
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