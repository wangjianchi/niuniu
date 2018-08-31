


var className = "org/cocos2dx/javascript/WxWrapper";
var handler;


export function wxLogin(h){
        handler = h;
        if(cc.sys.isNative){
            jsb.reflection.callStaticMethod(className, "wxLogin", "()V");
        }else{
            cc.vv.userMgr.onWXLoginResp("021bBcEv0lxy3b1HfeDv0AqTDv0bBcEr");
        }  
    }

export function  onWXLoginResp(code){
    handler(code);
}


export function wxShare(url,title,desc,type){
    if(cc.sys.isNative){
        jsb.reflection.callStaticMethod(className,"wxShareWeb","(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V",url,title,desc,type);
    }else{
        console.log("分享调用");
    }
}
