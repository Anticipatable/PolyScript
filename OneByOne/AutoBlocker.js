num = 1

setInterval(function(){ 
    $.post("/api/users/block", {id: randomIntFromInterval(1, 157030), csrf: "your csrf token"}, function (data) {
      if (data == "blocked") {
num=num+1
        //$("#block-user").html("Unblock");
      } else {
        num=num+1
        console.log("BLOCKED!")
        //$("#block-user").html("Block");
      }
    })
}, 100);
