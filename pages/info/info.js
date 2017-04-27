// pages/info/info.js
var app = getApp()
var login= require('../../utils/login.js')
function getgroup(that , session){
  var requestData = {
    date:{
      session:session
    },
    url:'http://127.0.0.1:8000/login/login',
    success: function(res){
      that.data.group =  res.group
    },
    fail: function(res) {
      console.log("getgroup fail")
      var groups = []
        groups.push({groupName:'group1',groupId:'00001'})
        groups.push({groupName:'group2',groupId:'00002'})
        groups.push({groupName:'group3',groupId:'00003'})
      that.setData({
      group:groups
    })
    },
  }
  wx.request(requestData)
}
Page({
  data: {
    userInfo: {},
    session:null,
    group:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {  
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log("getUserInfo")      
      that.setData({
        userInfo:userInfo
      })
    wx.setNavigationBarTitle({title:userInfo.nickName+"的群组"})
    getgroup(that , app.globalData.session)
    console.log("groups"+that.data.group)
    })
  }//onLoad:TODO get group_list
})
