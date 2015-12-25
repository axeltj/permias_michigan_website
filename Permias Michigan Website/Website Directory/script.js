var isFirst1 = true;
var isFirst2 = true;
var isFirst3 = true;
var isFirst4 = true;

$('.round_thumb_container1 img:gt(0)').hide();
$(".round_thumb_container1").hover(function(){
	if (isFirst1) {    
    timer = setInterval(function(){   $('.round_thumb_container1 :first-child').fadeOut()
    .next('img').fadeIn()
    .end().appendTo('.round_thumb_container1');},             
    500);
    isFirst1 = false;
  }
}, function() {
clearInterval(timer);
isFirst1 = true;
});

$('.round_thumb_container2 img:gt(0)').hide();
$(".round_thumb_container2").hover(function(){
	if (isFirst2) {    
    timer = setInterval(function(){   $('.round_thumb_container2 :first-child').fadeOut()
    .next('img').fadeIn()
    .end().appendTo('.round_thumb_container2');},             
    500);
    isFirst2 = false;
  }
}, function() {
clearInterval(timer);
isFirst2 = true;
});

$('.round_thumb_container3 img:gt(0)').hide();
$(".round_thumb_container3").hover(function(){
	if (isFirst3) {    
    timer = setInterval(function(){   $('.round_thumb_container3 :first-child').fadeOut()
    .next('img').fadeIn()
    .end().appendTo('.round_thumb_container3');},             
    500);
    isFirst3 = false;
  }
}, function() {
clearInterval(timer);
isFirst3 = true;
});

$('.round_thumb_container4 img:gt(0)').hide();
$(".round_thumb_container4").hover(function(){
	if (isFirst4) {    
    timer = setInterval(function(){   $('.round_thumb_container4 :first-child').fadeOut()
    .next('img').fadeIn()
    .end().appendTo('.round_thumb_container4');},             
    500);
    isFirst4 = false;
  }
}, function() {
clearInterval(timer);
isFirst4 = true;
});