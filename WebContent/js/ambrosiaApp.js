var color = {
	hueDeg : 0
};
var lastScrollTop = 0;
var colors = [ "#dbbb73", "#ae393b", "#ce5bc6", "#3968b5", "#62bc49", "#aaa" ];
$(document).ready(function() {
	loadingIntoDiv();
	closeCalendar();
});

$(window).on('load', function() {
// $("#scrolling").find("div").css("min-height", $(window).height());
// $("#scrolling").find("div").css("height", $(window).height());
// $("#scrolling").find("div").height($(window).height());
	console.log($("li.active").scrollTop());
	var i = 0;
	$(".cachu__nav__item").each(function() {
		if ($(this).hasClass("active")) {
			$(this).find("a").css("background-color", colors[i]);
		}else
			$(this).find("a").css("background-color", "#f8b624");
		i++;
	});
	
	$("#mainBodyDiv").css("height", $(window).height());
	$("#calendarBTN img").hover(function() {
		TweenMax.to($(this), .5, {
			css : {
				scale : 1.11,
				filter : 'drop-shadow(-3px -11px 13px #f8c7c7)'
			}
		});
	}, function() {
		TweenMax.to($(this), .5, {
			css : {
				scale : 1,
				filter : 'drop-shadow(-7px -17px 19px #f8c7c7)'
			}
		});
	});
});
var meshes, viewer;
function Load3DLogo() {
	var viewerSettings = {
		cameraEyePosition : [ 0.0, 0.0, 1.5 ],
		cameraCenterPosition : [ 0.0, 0.0, 0.0 ],
		cameraUpVector : [ 0.0, 1.0, 0.0 ]
	};

	viewer = new JSM.ThreeViewer();
	viewer.Start(document.getElementById('3DLogoCanvas'), viewerSettings);
	var svgObject = document.getElementById('SVGTMPLogo');
	var model = JSM.SvgToModel(svgObject, 8, 3, null);
	meshes = JSM.ConvertModelToThreeMeshes(model);
	viewer.navigation.EnableZoom (false);
	viewer.navigation.EnablePan (false);
	
	viewer.AddMeshes(meshes);
	viewer.FitInWindow();
	viewer.renderer.setClearAlpha(true);
	viewer.renderer.setClearColor( 0x23272a, 1);
	viewer.Draw();
}

function applyColor(element) {
	element.style["-webkit-filter"] = "hue-rotate(" + color.hueDeg + "deg)"
}

function onMousemoveLogo(e) {
	var ww = 111, wh = 111,  x = (e.clientX - ww / 2) / (ww / 2), y = (e.clientY - wh / 2) / (wh / 2);
	viewer.cameraMove.eye.y = y * 0.5;
	viewer.cameraMove.eye.x = x * 0.5;
// meshes.destination.y = x * 0.5;
	console.log();
}

function loadingIntoDiv() {
	$.ajax({
		type : "GET",
		url : "img/ambrosia/ambrosiaLogoIcon.svg",
		dataType : 'html',
		beforeSend : function() {
			console.log('loading')
		},
		success : function(data) {
			$("#logoIconContainerTMP").html(data);
			Load3DLogo();
		}
	});
	$.ajax({
		type : "GET",
		url : "img/ambrosia/burger.svg",
		dataType : 'html',
		beforeSend : function() {
			console.log('loading')
		},
		success : function(data) {
			$("#burger").append(data)
		}
	});

	$.ajax({
		type : "GET",
		url : "planetprint/img/colorfulbg2.svg",
		dataType : 'html',
		beforeSend : function() {
			console.log('loading')
		},
		success : function(data) {
			$("#pizza").append(data);
		}
	});
	$.ajax({
		type : "GET",
		url : "img/ambrosia/sandwich.svg",
		dataType : 'html',
		beforeSend : function() {
			console.log('loading')
		},
		success : function(data) {
			$("#sandwich").append(data)
		}
	});
	$.ajax({
		type : "GET",
		url : "img/ambrosia/stew.svg",
		dataType : 'html',
		beforeSend : function() {
			console.log('loading')
		},
		success : function(data) {
			$("#stew").append(data)
		}
	});
	$.ajax({
		type : "GET",
		url : "img/ambrosia/water.svg",
		dataType : 'html',
		beforeSend : function() {
			console.log('loading')
		},
		success : function(data) {
			$("#water").append(data)
		}
	});
	$.ajax({
		type : "GET",
		url : "img/ambrosia/salad.svg",
		dataType : 'html',
		beforeSend : function() {
			console.log('loading')
		},
		success : function(data) {
			$("#salad").append(data)
			$("#mainBodyDiv").css("height", $(window).height());
		}
	});
}

$(window).on("mousewheel", function(e) {
			$(".cachu__section").each(function() {
				if ($(this).css("visibility") !== "hidden") {
					if ($(this).attr("data-hue") != undefined) {
						var image = $("#divBackground")[0];
						TweenMax.to(color, .666, {
							hueDeg : $(this).attr(
									"data-hue"),
							onUpdate : applyColor,
							onUpdateParams : [ image ],
							repeat : 0,
							repeatDelay : 0
						});
						var tmax_optionsGlobal = {
							repeat : 0,
							repeatDelay : 0.65
						};
						var tl = new TimelineMax(
								tmax_optionsGlobal), path = $(
								this).find("svg")
								.children(), stagger_val = 0.009, duration = 5;
					    tl = new TimelineLite();
					    $.each($(path), function(i, el) {
							tl.set($(this),{
								x : '+='
									+ getRandom(-1000, 1000),
								y : '+=' + getRandom(-1000, 1000),
								rotation : '+=' + getRandom(-720, 720),
												scale : 0,
												opacity : 0,
												ease : Bounce.easeIn
											});
							var par = $(this);
						});
						$.each($(this).find("span"), function(i, el) {
							tl.set($(this),{rotation : '+=' + getRandom(-720, 720),
									scale : 0,
									opacity : 0,
									ease : Bounce.easeIn
											});
						});
						var stagger_opts_to = {
							x : 0,
							y : 0,
							opacity : 1,
							scale : 1,
							rotation : 0,
							ease : Power4.easeOut
						};
						tl.staggerTo(path, duration,
								stagger_opts_to,
								stagger_val);
						}
					}
				});
					// return;
			});

// CSSPlugin.useSVGTransformAttr = true;

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}
