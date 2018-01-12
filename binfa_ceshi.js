$('#startTest').on('click', function() {
  var project = [];
  var devices = [];
  var baseUrl = $('#baseUrl').val();
  var accesstoken = $('#accesstoken').val();
  /**
   * 循环测试每个接口
   */
  for (var i = 0; i < dataSets.length; i++) {
    var requestInfo = JSON.parse(dataSets[i]);
    var name = requestInfo.name;
    var url = requestInfo.url;
    var params = requestInfo.params;

    var requeObj = {};

    // 项目取样
    if (name === '项目权限') {
      var resDt = send_Prj_Request(name, url, requeObj, field);
    }
  }

  function send_Prj_Request(name, url, params, field) {
    return $.post(baseUrl + '/' + url + '?accesstoken=' + accesstoken, params);
  }
});
