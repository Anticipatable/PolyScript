var num = 1000

setInterval(function(){ 
  $.post("/api/catalog/favourite", {id: num, csrf: "your csrf token"}, function (data) {
    if (data == "success") {
      num=num+1
    } else {
      num=num+1
    }
  })
}, 100);
