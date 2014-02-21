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

$(document).ready(function() {
   $("#start").click(function() {
      $.ajax("start");
      window.updater = window.setInterval(getUpdate,5000);
      $(this).attr("disabled","disabled");
      $("#stop").removeAttr("disabled");
   });

   $("#stop").click(function() {
      $.ajax("stop");
      window.clearInterval(window.updater);
      $(this).attr("disabled","disabled");
      $("#start").removeAttr("disabled");
   });

});
