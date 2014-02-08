function initialize() {
	var mapProp = {
	  center:new google.maps.LatLng(52.40362, 16.94967),
	  zoom:16,
	  mapTypeId:google.maps.MapTypeId.ROADMAP,
	  scrollwheel: false
	  };
	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

	var image = new google.maps.MarkerImage('wp-content/themes/cyberbot/img/logo-male.png',
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
  	images: ["wp-content/themes/cyberbot/img/foto1.jpg", "wp-content/themes/cyberbot/img/foto2.jpg", "wp-content/themes/cyberbot/img/foto3.jpg"],
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
	
	var maxHeight = -1;
	$(".top-konkurencje").children().each(function() {
	 	maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	});
	
	$(".top-konkurencje").children().children().each(function() { $(this).height(maxHeight); });
	
	var maxHeight = -1;
	$(".mid-konkurencje").children().each(function() {
	 	maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	});
	
	$(".mid-konkurencje").children().children().each(function() { $(this).height(maxHeight); });
	
	var maxHeight = -1;
	$(".bottom-konkurencje").children().each(function() {
	 	maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	});
	
	$(".bottom-konkurencje").children().children().each(function() { $(this).height(maxHeight); });
});


