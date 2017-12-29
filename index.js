/** 
 * 数据抓取脚本
var url = $('a[href^="http"]').href;
var reg = /^(http:\/\/webapi.eegrid.com\/)(.*)(\?AccessToken=ACCESSTOKEN)$/gi;
reg.exec(url, 'i')
url = RegExp.$2;

var name = $("h1").innerHTML;

var r_params = [];
var nodes = $("#请求参数");
if (nodes) {
    if (nodes.nextElementSibling.children[1]) {
        nodes = nodes.nextElementSibling.children[1].children;
        for (var i = 0; i < nodes.length; i++) {
            var str = nodes[i].children[0].innerText;
            r_params.push(str);
        }
    }
}
var res_params = [];
var nodes = $("#返回参数");
if (nodes) {
    nodes = nodes.nextElementSibling.children[1].children;
    for (var i = 0; i < nodes.length; i++) {
        var str = nodes[i].children[0].innerText;
        res_params.push(str);
    }
}
var obj = {
    name: name,
    url: url,
    params: r_params,
    field: res_params
};
JSON.stringify(obj);

*/


var dataSets = [
    '{"name":"项目权限","url":"project/get","params":[],"field":["ProjectCode","ProjectName"]}',
    '{"name":"项目下所有告警类型","url":"alarmtype/get","params":["ProjectCode"],"field":["TypeID","AlarmTypeName","AlarmTypeLevel"]}',
    '{"name":"设备系统信息","url":"devicesystem/get","params":[],"field":["SystemCode","SystemName"]}',
    '{"name":"项目下所有设备类型","url":"devicetype/get","params":["ProjectCode"],"field":["DeviceTypeID","ParentCode","DeviceTypeName","SystemCode"]}',
    '{"name":"项目下所有设备","url":"device/get","params":["ProjectCode"],"field":["TypeID","TypeName","NavName","DeviceID","DeviceCode","DeviceName","IsDisplay"]}',
    '{"name":"项目下所有设备参数","url":"deviceparame/get","params":["ProjectCode"],"field":["DataCode","DataName","Unit"]}',
    '{"name":"项目房间(导航)与环境监测设备","url":"navparame/get","params":["ProjectCode"],"field":["NavCode","NavName","ParamName","DeviceID","DataCode"]}',
    '{"name":"设备采集参数","url":"datamapping/get","params":["ProjectCode"],"field":["DeviceID","DeviceName","DataCode","DataName"]}',
    '{"name":"告警条件配置","url":"alarmconfig/get","params":["ProjectCode"],"field":["DeviceID","DeviceName","DataCode","DataName","Expression","AlarmLevel"]}',

    '{"name":"某项目所有设备当前实时数据","url":"realdata/get","params":["ProjectCode"],"field":["DeviceID","DataCode","CollectTime","CollectData"]}',
    '{"name":"某项目某设备当前实时数据","url":"realdata/get","params":["ProjectCode","DeviceID"],"field":["DeviceID","DataCode","CollectTime","CollectData"]}',
    '{"name":"某项目某一时刻所有设备历史数据","url":"historydata/get","params":["ProjectCode","Date"],"field":["DeviceID","DataCode","CollectTime","CollectData"]}',
    '{"name":"某项目某一时刻某设备历史数据","url":"historydata/get","params":["ProjectCode","DeviceID","Date"],"field":["DeviceID","DataCode","CollectTime","CollectData"]}',
    '{"name":"某项目某日某设备逐时数据","url":"hourdata/get","params":["ProjectCode","DeviceID","Date"],"field":["DeviceID","DataCode","CollectTime","CollectData"]}',
    '{"name":"某项目某时间段所有设备历史数据","url":"historydataspan/get","params":["ProjectCode","StartTime","EndTime"],"field":["DeviceID","DataCode","CollectTime","CollectData"]}',

    '{"name":"某项目所有设备某日能耗","url":"energy/get","params":["ProjectCode","Date"],"field":["DeviceID","CollectTime","CollectData"]}',
    '{"name":"某项目某设备某日逐时能耗","url":"energy/get","params":["ProjectCode","DeviceID","Date"],"field":["DeviceID","CollectTime","CollectData"]}',

    '{"name":"某项目当前设定周期内最新告警","url":"alarm/get","params":["ProjectCode","Cycle"],"field":["AlarmID","AlarmLevel","AlarmType","DeviceID","DataCode","CollectData","Alarmtime","AlarmInfo"]}',
    '{"name":"某日某项目某设备所有历史告警","url":"alarm/get","params":["ProjectCode","DeviceID","Date"],"field":["DeviceID","DataCode","CollectData","AlarmID","AlarmLevel","AlarmType","Alarmtime","AlarmInfo"]}',
    '{"name":"某日某项目所有历史告警","url":"alarm/alldev/get","params":["ProjectCode","Date"],"field":["DeviceID","DataCode","CollectData","AlarmID","AlarmLevel","AlarmType","Alarmtime","AlarmInfo"]}'
];

$("#startTest").on('click', function () {
    /**
     * 循环测试每个接口
     */
    for (var i = 0; i < dataSets.length; i++) {
        var requestInfo = JSON.parse(dataSets[i]);
        var name = requestInfo.name;
        var url = requestInfo.url;
        var params = requestInfo.params;
        var field = requestInfo.field;
        sendRequest(name, url, params, field);
    }

    /** 
     * 发送请求
    */
    function sendRequest(name, url, params, field) {

    }
});

