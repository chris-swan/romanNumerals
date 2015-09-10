var countBy = function(total, multiple) {

    var result = [];

    if(total < multiple) {
        alert("Please enter a multiple lower than the total");
        document.write("Please try again with a lower count by value!");
    } else {
        for (var i = 1; i*multiple <= total; i++) {
            result.push(i*multiple);
        }
        return result;
    }
}

    $(document).ready(function() {
      $("form#countBy").submit(function(event) {
        var total = $("input#total").val();
        var multiple= $("input#multiple").val();
        var result = countBy(total, multiple);
        $(".result").append("<li>" + String(result) + "</li>");

        event.preventDefault();
     });

});
