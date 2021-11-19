function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
setInterval(function(){ 
    $.post("/api/users/block", {id: randomIntFromInterval(1, 157030), csrf: "your csrf token"}, function (data) {
      if (data == "blocked") {
        //$("#block-user").html("Unblock");
      } else {
        console.log("BLOCKED!")
        //$("#block-user").html("Block");
      }
    })
}, 100);
