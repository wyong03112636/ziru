// pages/component-b/component-b.js
const behavior = require('../behaviors/my-behaviors')
Component({
  behaviors:[behavior],
  /**
   * 组件的属性列表
   */
  properties: {

  },
  lifetimes:{
    created:function(){
      console.log(111)
    },
    attached(){
      console.log('attached')
    },
    detached:function(){
      console.log('detached')
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    num:{
      x:2,
      z:2,
      a:{}
    },
    isShow:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    play:function(){
      console.log(this.data.num)
    },
    handleClick(){
      this.setData({
        isShow:!this.data.isShow
      })
    }
  }

})
