$(function() { // document ready

	/* EVENT DESCRIPTION SCROLL */
	if (!!$('.event_description_container').offset()) { // make sure .event_description_container exists

		// TODO: if adding events (and therefore also event descriptions), add ID to IDs array and div's Top position to Tops array
		// IDs and Tops must have the same length.
		var IDs = ["#ed1",
					"#ed2",
					"#ed3",
					"#ed4",
					"#ed5"];
		var Tops = [$('#ed1').offset().top,
					$('#ed2').offset().top,
					$('#ed3').offset().top,
					$('#ed4').offset().top,
					$('#ed5').offset().top];

		$(document).scroll( function () { // when scroll
			var windowTop = $(document).scrollTop(); // update window's top
			// update all event_description_containers
			for (i = 0; i < IDs.length; i++) {
				if (Tops[i] < windowTop) { // windowTop is below div's top position
					$(IDs[i]).css({ position: 'fixed', width: '16%', left: '10%', top: '45px' });
				}
				else {
					$(IDs[i]).css({ position: 'absolute', width: '20%', left: '0', top: '0' });
				}
			}
		});
	}

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