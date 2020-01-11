// components/detail-location/location.js
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
    detail:{},
    list:[],
    configList:{},
    current:0
  },

  lifetimes:{
    created(){
      wx.request({
        url: 'https://m.ziroom.com/wap/detail/room.json?city_code=110000&id=62675538',
        success:(result)=>{
          console.log(result)
          let list1 = result.data.data.space.map((item,index) => (
            { "text": item.name, "area": item.area, "face": item.face, "config": item.config } 
          ))
          this.setData ({
            detail: result.data.data,
            list:list1
          })
          console.log(this.data.list)
        }
      })
    }
  },

  tabChange(e) {
    console.log('tab change', e)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    tabChange: function tabChange(e) {
      var index = e.currentTarget.dataset.index;
      if (index === this.data.current) {
        return;
      }
      this.setData({
        current: index,
        configList:this.data.list[index]
      });
      this.triggerEvent('change', { index: index, item: this.data.list[index] });
    }
  }
})
