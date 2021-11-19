function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
setInterval(function(){ 
  $.post("/api/catalog/favourite", {id: randomIntFromInterval(5000, 10000), csrf: "46021fe08bc7a45f301316d8dfafe76ece3c34b84f20424d0eb0160e46f7992d"}, function (data) {
    if (data == "success") {
      LoadFavourites();
    } else {
      console.error("Couldn't favourite item: " + data);
    }
  })
}, 1000);
