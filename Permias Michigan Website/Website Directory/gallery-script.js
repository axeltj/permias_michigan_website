$(function() { // document ready

	/* EVENT DESCRIPTION SCROLL */
	if (!!$('.event_description_container').offset()) { // make sure .event_description_container exists

		// TODO: if adding event descriptions, add ID to IDs and div's Top position to Tops
		// IDs and Tops must have the same length.
		var IDs = ["#ed1",
					"#ed2",
					"#ed3"];
		var Tops = [$('#ed1').offset().top,
					$('#ed2').offset().top,
					$('#ed3').offset().top];

		$(document).scroll( function () { // when scroll
			var windowTop = $(document).scrollTop(); // update window's top
			// update all event_description_containers
			for (i = 0; i < IDs.length; i++) {
				if (Tops[i] < windowTop) { // windowTop is below div's top position
					$(IDs[i]).css({ position: 'fixed', width: '16%' });
				}
				else {
					$(IDs[i]).css({ position: 'static', width: '20%'});
				}
			}
		});
	}

	/* THUMBNAIL PREVIEW*/
	$("#thumb_picture_container").click(function(){
    	$(this).addClass("large");
        $("#overlay").removeClass("hideoverlay").addClass("viewoverlay");
	});


})