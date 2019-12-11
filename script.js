var clock = $('#clock');
var text = $('<textarea>').val();

function update() {
  $('#clock').html(moment().format(' MMMM D, YYYY hh:mm:ss'));
  // $('#clock').fitText(1.3);
}
setInterval(update, 1000);

function checkTime() {
  if (parsInt($(".hour").attr("id")) < parseInt(moment().format('HH'))) {
      textarea.addClass("past");
  } else if 
    (parsInt($(".hour").attr("id")) < parseInt(moment().format('HH'))) {
      textarea.addClass("future"); }
    else {
      (parsInt($(".hour").attr("id")) = parseInt(moment().format('HH'))) 
        textarea.addClass("present");
    }}
  
  // console.log($(".hour").attr("id"));
  // console.log(moment().format('HH'))

 