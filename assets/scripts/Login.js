

function initMgr(){
    cc.vv = {};
    cc.vv.userMgr = require("UserMgr");
    cc.vv.http = require("HTTP");
}
cc.Class({
    extends: cc.Component,

    properties: {
       
    },
    onLoad () {
        initMgr();
        
    },

    start () {

    },

    onWxLoginClicked: function() {
        cc.vv.userMgr.wxLogin(function(code){
            var status = cc.find("Canvas/status").getComponent(cc.Label);
            status.string = code;
            var url  = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxfe30f75ca2295ffb&secret=8ce30387fb45f0f6b25e5c2263b99735&code="+code+"&grant_type=authorization_code";
            cc.vv.http.sendRequest(url);
       });
    },


    onWxShareClicked:function(){
        cc.vv.userMgr.wxShare("http://docs.cocos.com/creator/manual/zh/advanced-topics/java-reflection.html","牛牛","快了牛牛",1);
    }
});
