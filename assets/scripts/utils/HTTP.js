export function sendRequest(requestURL){
    var xhr = cc.loader.getXMLHttpRequest();
    xhr.timeout = 5000;
    xhr.open("GET",requestURL,true);
    if(cc.sys.isNative){
        xhr.setRequestHeader("Accept-Encoding", "gzip,deflate", "text/html;charset=UTF-8");
    }
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
            var response = xhr.responseText;
            console.log(response);
            cc.vv.userMgr.onWXLoginResp(response);
        }
    }
    xhr.send();

}