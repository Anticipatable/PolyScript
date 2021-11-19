var num = 1

setInterval(function(){ 
    $.post("/api/users/addfriend", { "csrf" : "your csrf token", "id": num}, function(data) {
      if (data == "success") {
        num=num+1
       //LoadFriendButton();
      } else {
        num=num+1
        console.log(`Error - ${data}`)
      }
    });
}, 100);
