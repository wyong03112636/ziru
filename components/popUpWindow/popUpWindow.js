// components/popUpWindow/popUpWindow.js
Component({
  
  properties: {
    type:{
      type:String,
      value:null
    }
  },

  data: {
    result:null,
    questionArr:[]
  },
  

  lifetimes:{
    attached(options){
      console.log(this.data.type)
      let res = null
      switch(this.data.type){
        case '1':
          break;
        case '2':
          res=wx.getStorageSync('services')
          break;
        case '3':
          res=wx.getStorageSync('traffic')
          break;
        default:
          res=wx.getStorageSync('question')
          this.setData({
            questionArr:this.formatData(res.content)
          })

      }
      this.setData({
        result:res
      })
      /* wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      }); */
    }
  },

  methods: {
    close(){
      wx.navigateBack({
        delta: 1
      });
    },
    formatData(arr){
      // let newArr
      let newArr = null
      let resArr = []
      for(let subArr of arr){
        newArr = subArr.desc.split('\n')
        resArr.push(newArr)
      }
      return resArr
    }
    
  }
})
