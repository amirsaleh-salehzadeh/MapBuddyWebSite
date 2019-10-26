var bus, car, train, stationCar, baloon1, baloon2, baloon3, cloud, heatTemp;
function runAllLoops(svgDoc){
	var tl = new TimelineMax({
		repeat: -1
	});
	tl.fromTo($("g#Bus"), 13, 
			{ x: -300}, 
			{ x: 300, force3D: false, ease:Linear.easeNone, repeatDelay:1.5, repeat:-1 }
		);
	tl.fromTo($("g#train"), 11, 
			{ x: -600},
			{ x: 600, force3D: false, ease:Linear.easeNone, repeatDelay:2.5, repeat:-1 }
		);
	tl.fromTo($("g#car"), 22, 
			{ x: -200},
			{ x: 400, force3D: false, ease:Linear.easeNone, repeatDelay:1.5, repeat:-1 }
		);
	tl.fromTo($("g#stationCar"), 22, 
			{ x: 200},
			{ x: -400, force3D: false, ease:Linear.easeNone, repeatDelay:2.5, repeat:-1 }
		);
	tl.fromTo($("g#cloud"), 66, 
			{ x: -200}, 
			{ x: 100, force3D: false, ease:Power3.easeOut, repeatDelay:1.5, repeat:-1 } );
	tl.fromTo($("g#cloud-4"), 66, 
			{ x: -300}, 
			{ x: 100, force3D: false, ease:Power3.easeOut, repeatDelay:2.5, repeat:-1 } );
	tl.fromTo($("g#cloud-4-4"), 66, 
			{ x: -300}, 
			{ x: 100, force3D: false, ease:Power3.easeOut, repeatDelay:1.5, repeat:-1 } );
//	TweenMax.set(svgDoc.getElementById("wildlifeBG"), {
//		  filter: 'invert(40%) grayscale(100%) brightness(40%) sepia(100%) saturate(400%) hue-rotate(-50deg)'
//		});
//	TweenMax.set($("#wildlifeBG"), {
//		  filter: 'invert(40%) grayscale(100%) brightness(40%) sepia(100%) saturate(400%) hue-rotate(-50deg)'
//		});
//	heatTemp = TweenMax.fromTo($("#wildlifeBG"), 5, 
//			{filter: 'invert(40%) grayscale(100%) brightness(40%) sepia(100%) saturate(100%) hue-rotate(-20deg)'},
//			{filter: 'invert(100%) grayscale(100%) brightness(100%) sepia(100%) saturate(400%) hue-rotate(-50deg)',
//			ease:Linear.easeNone, repeat:-1});
//	TweenMax.fromTo($("#wildlifeSun"), 5, 
//			{filter: 'invert(40%) grayscale(100%) brightness(40%) sepia(100%) saturate(100%) hue-rotate(-20deg)'},
//			{filter: 'invert(100%) grayscale(100%) brightness(100%) sepia(100%) saturate(400%) hue-rotate(-50deg)',
//			ease:Linear.easeNone, repeat:-1});
//	heatTemp.progress(3).pause();
//	setVehicles();
}
//function setVehicles(){
//	bus.play();
//	train.play();
//	car.play();
//	stationCar.play();
////	heatTemp.play();
//}