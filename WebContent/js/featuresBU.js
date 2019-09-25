$(document).ready(function(){
	
	// Variables
	var clickedTab = $(".feature-icons > .active");
	var tabWrapper = $(".tab__content");
	var activeTab = tabWrapper.find(".active");
	var activeTabHeight = activeTab.outerHeight();
	
	// Show tab on page load
	activeTab.show();
	
	// Set height of wrapper on page load
	tabWrapper.height(activeTabHeight);
	
	$(".feature-icons > li").on("click", function() {
		
		// Remove class from active tab
		$(".feature-icons > li").removeClass("active");
		
		// Add class active to clicked tab
		$(this).addClass("active");
		
		// Update clickedTab variable
		clickedTab = $(".feature-icons .active");
		
		// fade out active tab
		activeTab.fadeOut(250, function() {
			
			// Remove active class all tabs
			$(".tab__content > li").removeClass("active");
			
			// Get index of clicked tab
			var clickedTabIndex = clickedTab.index();

			// Add class active to corresponding tab
			$(".tab__content > li").eq(clickedTabIndex).addClass("active");
			
			// update new active tab
			activeTab = $(".tab__content > .active");
			
			// Update variable
			activeTabHeight = activeTab.outerHeight();
			
			// Animate height of wrapper to new tab height
			tabWrapper.stop().delay(50).animate({
				height: activeTabHeight
			}, 500, function() {
				
				// Fade in active tab
				activeTab.delay(50).fadeIn(250);
				
			});
		});
	});
});

var renderer, scene, camera, banana;

var ww = $(".content__wrapper").width(), wh = $(".content__wrapper").height();
function loadOBJ() {

	//Manager from ThreeJs to track a loader and its status
	var manager = new THREE.LoadingManager();
	//Loader for Obj from Three.js
	var loader = new THREE.OBJLoader(manager);

	//Launch loading of the obj file, addBananaInScene is the callback when it's ready 
	loader.load('img/Earth_Continent1.obj',
			addBananaInScene);

};
function init3D() {

	renderer = new THREE.WebGLRenderer({
		canvas : document.getElementById('scene'),
		alpha: true
	});
	renderer.setSize(ww, wh);

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(50, ww / wh, 0.1, 10000);
	camera.position.set(0, 0, 800);
	scene.add(camera);

	//Add a light in the scene
	directionalLight = new THREE.DirectionalLight(0xe8f1fd, 0.8);
	directionalLight.position.set(0, 0, 350);
	directionalLight.lookAt(new THREE.Vector3(0, 0, 0));
	scene.add(directionalLight);

	//Load the obj file
	loadOBJ();
}

var addBananaInScene = function(object) {
	banana = object;
	//Move the banana in the scene
	banana.rotation.x = 0;//Math.PI / 2
	banana.position.y = 0;
	banana.position.z = 0;
	//Go through all children of the loaded object and search for a Mesh
//	object.traverse(function(child) {
//		This allow us to check if the children is an instance of the Mesh constructor
//		if (child instanceof THREE.Mesh) {
//			child.material.color = new THREE.Color(0X025463);
//			Sometimes there are some vertex normals missing in the .obj files, ThreeJs will compute them
//			child.geometry.computeVertexNormals();
//		}
//	});
	//Add the 3D object in the scene
	scene.add(banana);
	render();
};

var render = function() {
	requestAnimationFrame(render);

	//Turn the banana
	banana.rotation.y += .01;

	renderer.render(scene, camera);
};

