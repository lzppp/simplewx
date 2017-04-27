var app = getApp()
Page({
  data: {
    list: [
      {
        id: 'set',
        name: '设置',
        open: false,
        pages: ['info']
      }, {
        id: 'get',
        name: '位置',
        open: false,
        pages: ['get-location']
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
}
)