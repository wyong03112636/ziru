// components/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      cityName: {
        type: String
      }
  },
  data: {
    currentCity: '',
    //是否启用定位功能
    _flag: true
  },
  options: {
    pureDataPattern: /^_/
  },
  attached() {
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        if(!that.data._flag) {
          
          that.curCity(res.longitude, res.latitude)
        }
      }
    })
  },
  /**
   * 组件的初始数据
   */
  observers: {
    cityName : function(newVal) {
      this.setData({
        _flag: !this.data._flag,
        currentCity: newVal
      })
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleTap() {
      wx.navigateTo({
        url: '../../pages/search/search',
      })
    },
    handleTapChooseCity() {
      wx.navigateTo({
        url: '../../pages/choose-city/choose-city',
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
          let city = res.data.result.addressComponent.city
          that.setData({
            currentCity: city,
          })
        }
      })
    },
  }
})
