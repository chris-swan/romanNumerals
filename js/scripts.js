var romans = function(userNumber) {
  var number = userNumber;
  if (userNumber > 3999) {
    alert("Please enter a number lower than 4,000");
    }
    else {
      var values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
      var symbols = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
      var results = [];
      var i = 0;
      var count = 0;

      while(number > 0) {
        while(i < values.length) {
              if(number >= values[i]) {
                  results.push(symbols[i]);
                  number = number - values[i];
                  count++;
                  console.debug(results);
              } else {
                  i++;
                  count = 0;
              }
        }
      }
          var str = "";
          for (var j = 0;
            j< results.length;
            j++) {
            str+=results[j]+"";
          }
         return str;
     }
  }

  $(document).ready(function() {
    $("form#RomanCount").submit(function(event) {
      var total = $("input#userNumber").val();
      var results = romans(total);
      $(".result").append("<li>" + String(results) + "</li>");

      event.preventDefault();
   });

});
