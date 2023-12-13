(function () {
  function clickHandler(message) {
    console.log("Hi ....... " + message);
  }

  //get a ref to my button myBtn
  let myBtn = document.getElementById("myBtn");
  myBtn.addEventListener("click", function () {
    clickHandler("hi from lifee");
  });
})();
