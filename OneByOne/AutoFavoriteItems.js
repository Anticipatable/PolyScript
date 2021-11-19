var num = 1

setInterval(function(){ 
  $.post("/api/catalog/favourite", {id: randomIntFromInterval(5000, 10000), csrf: "your csrf token"}, function (data) {
    if (data == "success") {
      num=num+1
    } else {
      num=num+1
    }
  })
}, 100);
