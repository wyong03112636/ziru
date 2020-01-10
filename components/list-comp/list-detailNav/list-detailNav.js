// components/list-comp/list-detailNav/list-detailNav.js
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
    details:[
      {
        label:'深呼吸',
        checked:false,
        rapidcode:3
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
      },
    ],
    
    
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    handChoice(e){
      let index = e.currentTarget.dataset.index
      let bool = this.data.details[index].checked
      console.log(this.data.details[index].rapidcode)
      this.setData({
        ['details[' + index + '].checked']:!bool
      })
    }


  }
})
