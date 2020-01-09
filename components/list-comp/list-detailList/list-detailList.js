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
  created(){
   
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
        console.log(res)
        this.setData({
          roomsList: res.data.data.rooms
        })
        console.log(this.data.roomsList[0].price[1][0])
      }
    })
    
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleLinkTodetail(e){
      console.log(e.currentTarget.dataset.id)
      let id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `../../pages/detail/detail?id=${id}`,
      })
    }

  }
})
