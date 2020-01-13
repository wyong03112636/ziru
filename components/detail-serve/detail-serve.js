// components/detail-serve/detail-serve.js
Component({

  options:{
    addGlobalClass:true
  },
  properties: {
    result:{
      type:Object,
      value:null
    }
  },

  /* lifetimes:{
    attached(){
      console.log(777)
    }
  }, */

  methods: {
    seeAll(){
      this.setData({
        isShow:true
      })
      wx.setStorageSync('services', this.data.result.services.detail);
      wx.navigateTo({
        //  url: `../popUpWindow/popUpWindow?result=${result}&type=1` 数据量太多，不适合通过url传参
        url: `/components/popUpWindow/popUpWindow?type=2`
      });
    }
    
  }
})
