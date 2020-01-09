// components/search.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap() {
      wx.navigateTo({
        url: '../../pages/search/search',
      })
    },
    handleTapChooseCity() {
      wx.navigateTo({
        url: '../../pages/choose-city/choose-city',
      })
    }
  }
})
