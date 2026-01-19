function practice(callback) {
    setTimeout(function () {
      callback();
    }, 10000);
  }
  
  function sayHello() {
    console.log("Hello! This runs after 10 seconds");
  }
  
  practice(sayHello);
  