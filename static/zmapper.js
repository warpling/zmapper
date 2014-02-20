function reqListener() {
   data = JSON.parse(this.responseText);

   for (prop in data) {
      var elem = document.getElementById(prop);
      
      if (elem == null) {
         continue;
      }

      while (elem.firstChild) {
         elem.removeChild(elem.firstChild);
      }

      elem.appendChild(document.createTextNode(data[prop]));
   }
}

function getUpdate() {
   var oReq = new XMLHttpRequest();
   oReq.onload = reqListener;
   oReq.open("GET", "status", true);
   oReq.send();
}

getUpdate();
setInterval(getUpdate,5000);
