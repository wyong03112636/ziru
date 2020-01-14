module.exports = Behavior({
  data: {
    details: [{
        label: '深呼吸',
        checked: false,
        rapidcode: 3
      },
      {
        label: '限时特惠',
        checked: false,
        rapidcode: 20
      },
      {
        label: '非首次出租',
        checked: false,
        rapidcode: 12
      },
      {
        label: 'VR看房',
        checked: false,
        rapidcode: 17
      },
      {
        label: '视频看房',
        checked: false,
        rapidcode: 10
      }
    ],
    roomsList: []
    
  },
  // observers: {
  //   'details[1].checked': function (checked) {
  //     console.log(11)
  //     this.setData({
  //       roomsList: this.data.roomsList
  //     }, () => {
  //       console.log(this.data.roomsList)
  //     })

  //   }

  // },
  
  created() {
    // roomsList: []
    this.code = ''
  },
  attached() {
    // console.log(this.data.details)
  },
  methods: {
    handChoice(e) {
      let index = e.currentTarget.dataset.index
      let bool = this.data.details[index].checked
      if (this.code === '' && bool === false) {
        this.code = this.code + this.data.details[index].rapidcode
      } else if (this.code !== '' && bool === false) {
        this.code = this.code + '|' + this.data.details[index].rapidcode
      }
      console.log(this.code)

      // console.log(this.data.details[index].rapidcode)
      // this.setData({
      //   ['details[' + index + '].checked']: !bool,
        
      // })
      var that = this;
      wx.request({
        url: 'https://m.ziroom.com/wap/room/list.json', //仅为示例，并非真实的接口地址
        data: {
          city_code: 110000,
          rapid: this.code
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function(res) {
          // console.log(res.data.data.rooms)
          let rooms = res.data.data.rooms
          that.setData({
            roomsList: rooms,
            ['details[' + index + '].checked']: !bool
          },()=>{
            console.log(that.data.roomsList)
          })
          
        }
      })


    }
  }

})