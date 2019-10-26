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
									 if($(this).css("visibility") != "visible")
										 return true
									 if($(this).css("visibility") == "visible")
										 $("#MSvideoContent").html($(this).find(".iframes-class")[0].outerHTML)
								})
					});
	var paddingforheader = 44;
	var leftofcontent = 44;
	if($(window).width()<=700)
		paddingforheader = 11
	$(".content-section-container")
	.each(function() {
		var leftofcontent = $(this)
		.parent()
		.find(
				".content-section-header")
		.position().left;
		if($(window).width()<=700)
			leftofcontent = 0
				$(this).css({"top" : $(this)
											.parent()
											.find(
													".content-section-header")
											.position().top
											+ $(
													this)
													.parent()
													.find(
															".content-section-header")
													.height()
											+ paddingforheader,
									"left" : leftofcontent
								})

			})
}