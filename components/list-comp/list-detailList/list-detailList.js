// components/list-comp/list-detailList/list-detailList.js
var listBehavior = require('../behavior.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  behaviors: [listBehavior],
  /**
   * 组件的初始数据
   */
  data: {
    
  },
  created() {

  },
  attached() {
    wx.request({
      url: 'https://m.ziroom.com/wap/room/list.json', //仅为示例，并非真实的接口地址
      data: {
        city_code: 110000,
        rapid: this.code
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        let rooms = res.data.data.rooms
        this.setData({
          roomsList: rooms
        })
      }
    })
   
  },
  methods: {
    handleLinkTodetail(e) {
      console.log(e.currentTarget.dataset.id)
      let id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `../../pages/detail/detail?id=${id}`,
      })
    }
  }
})