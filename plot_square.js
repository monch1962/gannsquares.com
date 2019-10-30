$('#submit').on('click', function() {
  var square_type = $('input[name=radios]:checked').val();
  //alert('~~' + square_type + '~~');
  if (square_type != '4') {
    gannsquare9();
  } else {
    gannsquare4();
  }
});
