//<script  type="text/javascript">
function() {
	var isFirst = true;

$('.round_thumb_container img:gt(0)').hide();
$(".round_thumb_container").hover(function(){
	if (isFirst) {    
    timer = setInterval(function(){   $('.round_thumb_container :first-child').fadeOut()
    .next('img').fadeIn()
    .end().appendTo('.round_thumb_container');},             
    750)
    isFirst = false;
  }
}, function() {
clearInterval(timer);
isFirst = true;
});
}
          
//        </script>