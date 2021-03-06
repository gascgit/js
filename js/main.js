// IIFE - Immediately Invoked Function Expression
  (function(yourcode) {

    // The global jQuery object is passed as a parameter
  	yourcode(window.jQuery, window, document);

  }(function($, window, document) {

    // The $ is now locally scoped 

   // Listen for the jQuery ready event on the document
   $(function() {

     $("h2").append(" :after");
     
     // The DOM is ready!

   });

   // The rest of the code goes here!

  }));

(self.counter = function() {
  var i = 0;

  counter.get = function() {
    return i;
  };

  counter.set = function(val) {
    i = val;
  };

  counter.increment = function() {
    return ++i;
  };

})();
$("h2").append(counter.increment);
