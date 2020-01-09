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
        checked:false
      },
      {
        label: '限时特惠',
        checked: false
      },
      {
        label: '非首次出租',
        checked: false
      },
      {
        label: 'VR看房',
        checked: false
      },
      {
        label: '视频看房',
        checked: false
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
      this.setData({
        ['details[' + index + '].checked']:!bool
      })
      
    }


  }
})
