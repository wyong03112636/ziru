// components/detail-traffic/detail-traffic.js
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
  
  methods:{
    look(){
      wx.setStorageSync('traffic', this.data.result.resblock);
      wx.navigateTo({
        url: `/components/popUpWindow/popUpWindow?type=3`
      });
    }
  }
})
