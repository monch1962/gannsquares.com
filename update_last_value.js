function update_last_value() {
  var start = parseFloat($('#startno').val());
  var increment = parseFloat($('#increment').val());
  var levels = parseInt($('#levels').val());
  var square_type = $('input[name=radios]:checked').val()
  var value;
  if (square_type == '9') {
    value = (start - 1) + increment * Math.pow((levels * 2 + 1), 2) - (increment - 1);
  } else {
    value = (start - 1) + increment * Math.pow((levels * 2 + 2), 2) - (increment - 1);
  };
  $("#lastnumber").html('Last value = <mark>' + value + '</mark>');
};

$(document).ready(function() {
  $('#startno').val(1);
  $('#increment').val(1);
  $('#levels').val(10);
  update_last_value();
});

$("#startno").on('change', function() {
  update_last_value()
});

$("#increment").on('change', function() {
  update_last_value()
});

$("#levels").on('change', function() {
  update_last_value()
});

$('input[name=radios]:checked').on('click', function() {
  update_last_value()
})
