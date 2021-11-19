num = 1

setInterval(function(){ 
    $.post("/api/users/removefriend", { "csrf" : "your csrf token", "id": num}, function(data) {
      if (data == "success") {
        num=num+1
      } else {
        num=num+1
        console.log(`Error - ${data}`)
      }
    });
}, 100);
