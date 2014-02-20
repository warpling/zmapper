function reqListener() {
   console.log(this.responseText)
}

setInterval(function() {
   var oReq = new XMLHttpRequest();
   oReq.onload = reqListener;
   oReq.open("get", "status", true);
   oReq.send();
},5000);
