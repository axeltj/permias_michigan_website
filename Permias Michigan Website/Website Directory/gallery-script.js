$(function() { // document ready

	/* THUMBNAIL CLICK TO VIEW FULL PHOTO */
	$(".thumb_picture_container").click(function() {
		$("#overlay").removeClass("hideoverlay").addClass("viewoverlay"); // show overlay
		$(this).children('img').attr( 'src', $(this).children('img').attr('data-large-img-src') ); // set new img src
		$(this).attr('id','large'); // switch to large img
	});

	/* CLOSE FULL PHOTO VIEW */
	$("#overlay").click(function() {
		$(".thumb_picture_container").attr('id','small'); // switch to small img
		// $(".thumb_picture_container").children('img').attr( 'src', $(this).attr('data-small-img-src') ); // ALTERNATIVE TO FUNCTION CALL BELOW
		$("#overlay").removeClass("viewoverlay").addClass("hideoverlay");
		$(".thumb_picture_container img").each(function() { // Makes ALL thumbnails use small img src
			$(this).attr( 'src', $(this).attr('data-small-img-src') );
		});
	});


})