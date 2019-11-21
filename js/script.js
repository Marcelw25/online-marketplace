$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var addressInput = $("input#address").val();
    var colorInput= $("input:radio[name=color]:checked").val();
    alert(colorInput)


    $(".person1").text(person1Input);
    $(".address").text(addressInput);
    $("#colorInput").text(colorInput);

    $("#story").show();

    event.preventDefault();
  });
});
