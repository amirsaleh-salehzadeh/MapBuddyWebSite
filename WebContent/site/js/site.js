function drawBackgroundSvg () {
	  var width = $(document).width();
	  var height = $(document).height() * 0.8;
	  $('.triangles').css('width','100%');
	  $('.triangles').css('height','100%');
	  var pointsA = '0,0 '
	      + width / 2+','+height /2 + ' ' 
	  +  '0,' + height;
	  var pointsB = width + ',0 '
	      + width / 2+','+height /2 + ' ' 
	      + width +  ',' + height;
	  $('.triangle-a').attr('points',pointsA);
	  $('.triangle-b').attr('points',pointsB);
	}

function loadPage(pageAddress) {
	if (pageAddress.indexOf("landing") < 0)
		$(".hamburger").trigger("click");
	$("#page-load-content").html("")
	$('.coming-soon').css('display', 'none')
	$("#features-page").load(pageAddress, function(){
		if($(window).width()<=700){
			  $("iframe").each(function(){
				  $(this).attr("width",$(".mainBodyFrame").width())
				  $(this).attr("height",$(".mainBodyFrame").height())
			  })
		  }
	})
}

function removeLoading() {
	drawBackgroundSvg()
	$(".page-background").fadeIn(8000)
	$('.invisible').removeClass("invisible")
	$(".frameLoding").remove()
	$('.large-text').fadeIn(2000)
}

function showMobileViewDemo(){
	if($('#MSvideoContainer').hasClass("show"))
		$('#MSvideoContainer').removeClass("show")
	else
		$('#MSvideoContainer').addClass("show")
}
function loadaPage(address) {
	$("#page-load-content").html("")
	$("#page-load-content")
			.load(
					address,
					function() {
						$("#page-load-container").addClass("show")
						var options = {
							disableMouseEvents : true, 
							disableKeyboardEvents : false,
							disableTouchEvents : true,
							scrollingSpeed : 1111,
							scrollingLoop : false,
							navigationEnabled : true,
							navigationPosition : 'left'
						};
						var slider = new Cachu(document
								.querySelector('.cachu__container'),
								options);
						slider.run();
						setTimeout(loadIcons, 500)
					})
}
function loadIcons() {
	$(".cachu__nav__item").each(
			function(l, k) {
				$(this).find("a")
						.css("background-image",
							"url(" + $(".section-icon").eq(l).attr("src") + ")")
			})
	$(".cachu__sections")
			.on('transitionend webkitTransitionEnd oTransitionEnd',
					function() {
						$(".cachu__section")
								.each(function() {
// if($(this).css("visibility") != "visible")
// return true
// if ($(window).width()>700) {
// $("#MSvideoContent")
// .html()
// }else {
									if($(this).css("visibility") != "visible")
										$("#MSvideoContent").html($(this).find(".iframes-class")[0].outerHTML)
// }
								})
					});
}