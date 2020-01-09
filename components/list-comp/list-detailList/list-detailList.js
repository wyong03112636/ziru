// components/list-comp/list-detailList/list-detailList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    roomsList: []
  },
  attached() {
    wx.request({
      url: 'https://m.ziroom.com/wap/room/list.json', //仅为示例，并非真实的接口地址
      data: {
        city_code: 110000,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        // console.log(res)
        this.setData({
          roomsList: res.data.data.rooms
        })
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
