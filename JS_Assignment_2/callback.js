function practice(callback) {
    setTimeout(function () {
      callback();
    }, 10000);
  }
  
  function sayHello() {
    console.log("Hello");
  }
  
  practice(sayHello);
  