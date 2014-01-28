function initialize() {
	var mapProp = {
	  center:new google.maps.LatLng(52.40362, 16.94967),
	  zoom:16,
	  mapTypeId:google.maps.MapTypeId.ROADMAP,
	  scrollwheel: false
	  };
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

	var image = new google.maps.MarkerImage('Content/logo-male.png',
    new google.maps.Size(49, 48),

    new google.maps.Point(0,0),

    new google.maps.Point(25, 48)
  );

	var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(52.40362, 16.94967),
    map: map,
    icon: image // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
  });


}

google.maps.event.addDomListener(window, 'load', initialize);



$(document).ready(function() {
	$(".main-banner").bgswitcher({
  	images: ["Content/foto1.jpg", "Content/foto2.jpg", "Content/foto3.jpg"],
  	duration: 800,
  	interval: 3000,
  	easing: "swing",
  	effect: "fade"
  });

  $("#scroller").simplyScroll();
  
	$('.single-page-nav').singlePageNav({
    offset: $('.single-page-nav').outerHeight() + 50,
    filter: ':not(.external)',
    beforeStart: function() {
        console.log('begin scrolling');
    },
    onComplete: function() {
        console.log('done scrolling');
    }
   });

  /*
	$("#minisumo").popover();

	$('#minisumo').on('shown.bs.popover', function () {
  	$(this).next('div').css('top', event.pageY);
  	$(this).next('div').css('left', event.pageX);
	});

	$("#nanosumo").popover();

	$('#nanosumo').on('shown.bs.popover', function () {
  	$(this).next('div').css('top', event.pageY);
  	$(this).next('div').css('left', event.pageX);
	});

	$("#sumo").popover();

	$('#sumo').on('shown.bs.popover', function () {
  	$(this).next('div').css('top', event.pageY);
  	$(this).next('div').css('left', event.pageX);
	});

	$("#linefollower").popover();

	$('#linefollower').on('shown.bs.popover', function () {
  	$(this).next('div').css('top', event.pageY);
  	$(this).next('div').css('left', event.pageX);
	});

	$("#lfenhanced").popover();

	$('#lfenhanced').on('shown.bs.popover', function () {
  	$(this).next('div').css('top', event.pageY);
  	$(this).next('div').css('left', event.pageX);
	});

	$("#micromouse").popover();

	$('#micromouse').on('shown.bs.popover', function () {
  	$(this).next('div').css('top', event.pageY);
  	$(this).next('div').css('left', event.pageX);
	});*/

});


