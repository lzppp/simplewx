var app = getApp()
Page({
  data: {
    //
    height:'600px',
    //message
    animationData:"",
    showModalStatus:false,
    title:'pyquan',
    cont:'py',
    //location
    latitude: 23.099994,
    longitude: 113.324520,
    scale:15,
    markers: [{
      id:0,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园',
      iconPath: '/image/location.png',
      width:50,
      height:50
    }],
    message_marker:[
      {
        id:0,
        groupid:1
      }
    ]
  },
onLoad: function(){
  var that = this;
  var height='600px'
  wx.getSystemInfo({  
    success: function(res) { 
    console.log( res.windowHeight);
      that.setData({
        height: res.windowHeight.toString()+'px'
      })
    }
  })
},
 maptap:function(e){
   this.hideModal()
   console.log(e)
 },
 makertap:function(e){
   var that = this
   that.setData({
      markers: [{
        id:0,
        latitude: 23.099994,
        longitude: 113.324520,
        name: 'T.I.T 创意园',
        iconPath: "/image/wechatHL.png",
        width:50,
        height:50
      
    }]
   })
    var id = e.markerId;
    var that = this;
    this.showModal()
    },
  showMarkerInfo: function(data,i){
    var that = this;
    that.setData({
      textData: {
        name: data[i].name,
        desc: data[i].address
      }
    });
  },
 //showModal
 showModal: function () {
   //she zhi shuju
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },
})