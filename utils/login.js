var app = getApp()
function check_login(){
    var session= ''
    wx.getStorage({
    key: 'session',
    success: function(res) {
      console.log(res.data)
      session = res.data
    } 
  })
    wx.request({  
          data:{
            session:session,
          },
          url: 'http://127.0.0.1:8000/login/checklogin',
    
            
      success: function(res) {; },
      fail:function(res) {; }
    })
}
function getsession(js_code){
    wx.request({  
          data:{
            js_code:js_code,
          },
      url: 'http://127.0.0.1:8000/login/login',
            
      success: function(res) {  
        console.log("request success")
        console.log(res.data.session) //session
        wx.setStorage({
          key: 'session',
          data: res.data.session,
          success: function(res){
            // success
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
          }
        })//wxsave
        app.globalData.session = res.data.session
      },
      fail: function(res) {
        console.log("request fail")
        app.globalData.session ="jscode"
        //goto login page
      }  
    });
}
function getgroup(session){
  var requestData = {
    date:{
      session:session
    },
    url:'http://127.0.0.1:8000/login/login',
    success: function(res){
      return res.group
    },
    fail: function(res) {
      console.log("getgroup fail")
      var groups = [
        {groupName:'group1',groupId:'00001'},
        {groupName:'group2',groupId:'00002'},
        {groupName:'group3',groupId:'00003'}
      ]
      return groups
    },
  }
  wx.request(requestData)
}
module.exports = {
  check_login: check_login,
  getsession :getsession,
  getgroup:getgroup
}
