// components/resblock/resblock.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  data: {
    list:[],
    content:{},
    isShow:false
  },

  lifetimes:{
    created() {
      wx.request({
        url: 'https://m.ziroom.com/resblock/detail?resblock_id=1111027379295',
        success: (result) => {
          this.setData({
            list: result.data.data.intro.data.slice(0, 4),
            content: result.data.data
          })
        }
      })
    }
  },
  methods: {
    more:function(){
      console.log(!this.data.isShow)
      this.setData({
        isShow: !this.data.isShow
      })
    },
    cancel:function(){
      this.setData({
        isShow: false
      })
    }
  }
})
