$(window).on('load', function() {
	loadingIntoDiv();
});

function loadingIntoDiv() {
    $.ajax({
         type: "GET",
         url: "img/food.svg",
         dataType: 'html',
         beforeSend: function() {
            console.log('loading')
         },
         success: function(data) {
        	 $("#mainBodyDiv").html(data)
        	 $("#mainSVG").attr("preserveAspectRatio", "none");
				$("#mainSVG").css("height", $(window).height());
				$("#mainBodyDiv").css("height", $(window).height());
				TweenMax.to("g#menuItems", .5, {
					opacity : 1,
					ease : Power4.easeOut
				});
				TweenMax.to("g#menuBTN", .5, {
					opacity : 1,
					ease : Power4.easeOut
				});
				$("g#menuBTN").click(function() {
					openMenu();
				});
				$("g#foodBTN").click(function() {
					showFoodPage();
				});
				$("#ambrosiaAppBTN").click(function() {
					showAmbrosiaApp();
				});
				$("g#accommodationBTN").click(function() {
					showAccommodationPage();
				});
				$("#accommodationAppBTN").click(function() {
					showAccommodationApp();
				});
				$("g#transportBTN").click(function() {
					showTransportationPage();
				});
				openMenu();
         }
    });
    
}


function parallaxIt(e, target, movement) {
	var $this = $("#mainSVG");
	  var relX = e.clientX;
	  var relY = e.clientY;			  
	  TweenMax.to(target, 1, {
		 xPercent: (relX - $this.width() / 2) / $this.width() * movement,
	     yPercent: (relY - $this.height() / 2) / $this.height() * movement
	  });
	  
	}

function openMenu() {
	var clone = $("g#menuItems");
	$("#mainSVG").append(clone);
	TweenMax.to("#foodPage", .3, {
		opacity : 0,
		ease : Power4.easeOut
	});
	TweenMax.to("#accommodationPage", .3, {
		opacity : 0,
		ease : Power4.easeOut
	});
	TweenMax.to("#transportationPage", .3, {
		opacity : 0,
		ease : Power4.easeOut
	});
	TweenLite
			.fromTo(
					"#menuItems",
					2.7,
					{
						transform : "matrix(-0.00582724,0,0,-0.00582724,9.7734752,7.2555997)",
						opacity: 0
					},
					{
						transform : "matrix(0.9859652,0,0,0.9859652,-18.527242,-7.1551872)",
						opacity : 1,
						rotation:360
					});
}

function showAmbrosiaApp(){
	var clone = $("g#ambrosiaApp");
	$("#foodPage").append(clone);
	TweenMax.to("g#ambrosiaApp", .3, {
		opacity : 1
	});
	TweenMax.from("g#ambrosiaApp", 1, {
		x : "-100%"
	});
	$("#ambrosiaApp").find("g#backBTNFoodApp").click(function(){
		TweenMax.to("g#ambrosiaApp", 1, {
			opacity: 0
		});
		clone = $("g#ambrosiaApp");
		setTimeout(function(){$("#foodPage").prepend(clone)}, 2000);
	});
}

function showFoodPage() {
	TweenMax.to("#" + $(this).attr('id'), .5, {
		scale : 1,
		ease : Power4.easeOut
	});
	var clone = $("g#foodPage");
	$("#mainSVG").append(clone);
	$("#mainSVG").append($("#headerArea"));
	TweenMax.to("#menuItems", 1, {
		opacity : 0
	});
	TweenMax.to("g#ambrosiaApp", .5, {
		opacity : 0
	});
	document.body.style.setProperty("background-color",
			"rgb(0, 17, 9)", "important");
	TweenMax.to("g#foodPage", 2, {
		opacity : 1,
		ease : Power4.easeOut
	});
	$("#mainSVG").append($(".headerArea"));
	$('#foodPage').mousemove(
	function(e){
		  parallaxIt(e, "#parallaxClosestFood", 0);
		  parallaxIt(e, "#parallaxCloseFood", -3);
		  parallaxIt(e, "#parallaxMidFood", -5);
		  parallaxIt(e, "#parallaxFarFood", -10);
	});
}

function showAccommodationApp(){
	var clone = $("g#accommodationApp");
	$("#accommodationPage").append(clone);
	TweenMax.to("g#accommodationApp", .3, {
		opacity : 1
	});
	TweenMax.from("g#accommodationApp", 1, {
		x : "-100%"
	});
	$("#accommodationApp").find("g#backBTNAccommodationApp").click(function(){
		TweenMax.to("g#accommodationApp", 1, {
			opacity: 0
		});
		clone = $("g#accommodationApp");
		setTimeout(function(){$("#accommodationPage").prepend(clone)}, 2000);
	});
}

function showAccommodationPage() {
	var clone = $("g#accommodationPage");
	$("#mainSVG").append(clone);
	$("#mainSVG").append($("#headerArea"));
	TweenMax.to("#menuItems", 1, {
		opacity : 0
	});
	TweenMax.to("g#accommodationApp", .5, {
		opacity : 0
	});
	document.body.style.setProperty("background-color",
			"#030a0b", "important");
	TweenMax.to("g#accommodationPage", 2, {
		opacity : 1,
		ease : Power4.easeOut
	});
	$("#mainSVG").append($(".headerArea"));
	$('#accommodationPage').mousemove(
	function(e){
		  parallaxIt(e, "#parallaxClosestAccommodation", 0);
		  parallaxIt(e, "#parallaxCloseAccommodation", -3);
		  parallaxIt(e, "#parallaxMidAccommodation", -5);
		  parallaxIt(e, "#parallaxFarAccommodation", -10);
	});
}

function showTransportationPage() {
	var clone = $("g#transportationPage");
	$("#mainSVG").append(clone);
	$("#mainSVG").append($("#headerArea"));
	TweenMax.to("#menuItems", 1, {
		opacity : 0
	});
	TweenMax.to("g#transportationApp", .5, {
		opacity : 0
	});
	document.body.style.setProperty("background-color",
			"#0a1122", "important");
	TweenMax.to("g#transportationPage", 2, {
		opacity : 1,
		ease : Power4.easeOut
	});
	TweenMax.fromTo("g#stationCar", 5, {x: '100%' }, {  ease:Power0.easeNone, x: '-100%', repeat : -1 });
	TweenMax.fromTo("g#Bus", 5, {x: '100%' }, {  ease:Power0.easeNone, x: '-100%', repeat : -1 });
	TweenMax.fromTo("g#car", 5, {x: '100%' }, {  ease:Power0.easeNone, x: '-100%', repeat : -1 });

	$("#mainSVG").append($(".headerArea"));
}

