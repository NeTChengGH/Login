/**
 * app必须初始化的数据
 */
var baseDomain = "http://192.168.1.102:8080";
var appName = "iEat3";
var baseUrl = baseDomain + "/" + appName;
var sourceName = "HtmlSource";
var source = "";

//获得参数的方法
var request = {
	QueryString : function(val)
	{
		var uri = window.location.search;
		var re = new RegExp("" +val+ "=([^&?]*)", "ig");
		return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):null);
	}
}

source = request.QueryString(sourceName);	// 来源地址