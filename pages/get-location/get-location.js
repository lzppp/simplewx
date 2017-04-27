var util = require('../../utils/util.js')
var geoh = require('../../utils/geohash.js')
var formatLocation = util.formatLocation
var encodeGeoHash = geoh.encodeGeoHash
var locationgeo
Page({
  data: {
    hasLocation: false,
  },
  getLocation: function () {
    var that = this
    wx.getLocation({
      success: function (res) {
        locationgeo = encodeGeoHash(res.longitude, res.latitude)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.latitude , res.longitude     )  
        })
      }
    })
  },
  clear: function () {
    this.setData({
      hasLocation: false
    })
  },
  formSubmit: function (e) {
    console.log(e.detail.value)
    console.log('form发生了submit事件，携带数据为：',e.detail.value)
    if (""!=e.detail.value.name && ""!=e.detail.value.school && e.detail.value.class!="" && e.detail.value.location!=""){
    wx.request({
      url: 'http://127.0.0.1:8000/background/test',
      data: {
        name: e.detail.value.name ,
        school: e.detail.value.school,
        class:e.detail.value.class,
        geo:locationgeo
      },
    header: {
      'Content-Type': 'application/json'
    },
    success: function(res) {
      console.log(res.data)
    }
    
    })//wx.request
    }//if 
    else {
      wx.showModal({
        title: '提示',
        content: '请输入信息',
        success: function(res) {
          if (res.confirm) {
          console.log('用户点击确定')
          }
        }
      })//messeg
    }
  },//fromsubmit
  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
  }//fromreset
})//page
