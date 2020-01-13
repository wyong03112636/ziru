// components/detail-question/detail-question.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    addGlobalClass:true
  },
  
  properties: {
    result:{
      type:Object,
      value:null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    see(e){
      let type = e.currentTarget.dataset.itemid
      console.log(this.data.result)
      wx.setStorageSync('question',this.data.result.questions)
      wx.navigateTo({
        url:`/components/popUpWindow/popUpWindow?type=${type}`
      })
    }
  }
})
