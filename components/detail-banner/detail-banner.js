// pages/components/detail-banner.js
const Swiper = require('swiper')
Component({
  /**
   * 组件的属性列表
   */
  data:{
    result:null,
    dotsArray:['02卧','公共卫生间','起居室','厨房'],
    imgList:[],
    activeList:[]
  },
  properties: {

  },

  lifetimes:{
    attached(){
      wx.request({
        url: 'https://m.ziroom.com/wap/detail/room.json?city_code=110000&id=62757127',
        success:res=>{
          let list = res.data.data.space.map((value)=>{
            return value.photos_big
          })
          list = this.actBianPing(list,[])
          let activeList = res.data.data.activity_list.map((value)=>{
            return {name:value.name,title:value.title}
          })
          
          this.setData({
            result:res.data.data,
            imgList:list,
            activeList
          })
        }
      }
      )
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
   }
  }
})
