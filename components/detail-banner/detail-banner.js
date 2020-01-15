// pages/components/detail-banner.js
const Swiper = require('swiper')
Component({
  /**
   * 组件的属性列表
   */
  options:{
    addGlobalClasses:true
  },

  properties:{
    result:{
      type:Object,
      value:null
    },
    top:{
      type:Number,
      value:0
    }
  },
  data:{
    // result:null,
    dotsArray:['02卧','公共卫生间','起居室','厨房'],
    imgList:[],
    activeList:[]
  },
  /* properties: {
    myid:{
      type:String,
      value:'666'
    }
  }, */

  lifetimes:{
    /* created(){
      console.log(this.data.myid)
    }, */
    attached(){
      console.log(this.data.top)
      let list = this.data.result.space.map((value)=>{
        return value.photos_big
      })
      list = this.actBianPing(list,[])
      let activeList = this.data.result.activity_list.map((value)=>{
        return {name:value.name,title:value.title}
      })
      this.setData({
        imgList:list,
        activeList
      })
    }
  },

  /**
   * 组件的方法列表
   */
  
  methods: {
    actBianPing(a,newA){   
      for(let i of a){
        if(Object.prototype.toString.call(i)=='[object Array]'){
          newA.concat(this.actBianPing(i,newA))
        }
        else{
          newA.push(i)     
        }
      }
      return newA 
   },
   clickPayStyle(){
    //  let result = this.data.result.services
     //wx.setStorageSync('services', this.data.result.services.detail);
     wx.navigateTo({
      //  url: `../popUpWindow/popUpWindow?result=${result}&type=1` 数据量太多，不适合通过url传参
       url: `/components/popUpWindow/popUpWindow?type=1`
     });
   },
   close() {
    this.setData({
      ispopUpWindowShow: false
    })
  }
  }
})
