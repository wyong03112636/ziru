// components/list-comp/list-detailNav/list-detailNav.js
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
  data: {
    // details:[
    //   {
    //     label:'深呼吸',
    //     checked:false,
    //     rapidcode:3
    //   },
    //   {
    //     label: '限时特惠',
    //     checked: false,
    //     rapidcode: 20
    //   },
    //   {
    //     label: '非首次出租',
    //     checked: false,
    //     rapidcode: 12
    //   },
    //   {
    //     label: 'VR看房',
    //     checked: false,
    //     rapidcode: 17
    //   },
    //   {
    //     label: '视频看房',
    //     checked: false,
    //     rapidcode: 10
    //   },
    // ],
    
    
  },
  created(){
    // this.code = ''
  },
  
  /**
   * 组件的方法列表
   */
  
  methods: {
    // handChoice(e){
    //   let index = e.currentTarget.dataset.index
    //   let bool = this.data.details[index].checked
    //   if(this.code === '' && bool === false){
    //     this.code = this.code + this.data.details[index].rapidcode
    //   } else if (this.code !== '' && bool === false){
    //     this.code = this.code + '|' + this.data.details[index].rapidcode
    //   }
    //   console.log(this.code)
    //   // console.log(this.data.details[index].rapidcode)
    //   this.setData({
    //     ['details[' + index + '].checked']:!bool
    //   })
    // }


  }
})
