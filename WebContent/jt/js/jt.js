//Loads a URL into the main DIV area
function loadContent(url) {
	$("div#page-content").hide()
	$(".frameLoding").fadeIn()
	$(".menu-item").removeClass("active")
	$(".page-content-area-bg").remove()
	$(".page-content-area").remove()
	$.ajax({
		url : url,
		cache : false,
		success : function(response) {
			var tl = new TimelineLite({
				paused : true,
				ease : Power4.easeOut
			})
			tl.to("#page-content", 1, {
				opacity : 0
			}).to("#page-content", 1.2, {
				opacity : 1
			}, "-= .4")
			$("#page-content").fadeIn()
			$("#page-content").html("")
			$("#page-content").prepend(
					$("<div/>").addClass("page-content-area"))
			$(".page-content-area").html(response)
			$("#page-content").prepend(
					$("<div/>").addClass("page-content-area-bg"))
			tl.play()
			$(".frameLoding").fadeOut()
		},
		complete : function() {
			$('[data-toggle="tooltip"]').tooltip()
		}
	})
}

// SHOWS/HIDES THE ERROR OR SUCCESS MESSAGE DIALOG BOX,
// INPUT: 1- gets a text message and boolean (True pops the error message. False
// pops the success message)
function toggleMessageBox(messageText, isError) {
	if (isError) {
		$(".error-message-content").html(messageText)
		$("#error-message-modal").modal("show")
	} else {
		$(".success-message-content").html(messageText)
		$("#success-message-modal").modal("show")
	}
}

// Toggles a confirmation box,
// The inputs, include a string showing the message, a callback function and
// respective the parameters required for the callback function
function toggleConfirmationBox(callback) {
	$(".confirmation-message-content").html(arguments[1])
	$("#confirmation-box-modal").modal("show")
	const args = [].slice.call(arguments)
	$("#confirmation-box-btn").unbind("click");
	$("#confirmation-box-btn").on("click", function() {
		callback(args)
		$("#confirmation-box-modal").modal("hide")
	})
}

//OPENS A POPUP DIALOG DIV SHOWING THE CONTENT OF A URL
function showDialogPage(url) {
	$("<div/>").load(
			url,
			function(response) {
				openFullScreenDiv("<div class='dialog-popup-content'>"
						+ response + "</div>")
			})
	return -1
}

var funcRegWizard = function() {
	loadContent("OTPReceived.html")
}

function register() {
	toggleConfirmationBox(funcRegWizard,
			"An OTP (One-Time-Password) has been sent to you")
}


function openFullScreenDiv(htmlContenet) {
	$(".full-screen-div").html(htmlContenet)
	$(".full-screen-div").css("display", "block")
	$(".dialog-popup-content").append(
			$("<div/>").addClass("close-button").attr("onclick",
					"closeFullScreenDiv()"))
	TweenLite.to(".full-screen-div", .333, {
		scale : 1,
		top : 0,
		right : 0,
		left : 0,
		bottom : 0,
		transformOrigin : "center"
	})
}

function closeFullScreenDiv() {
	TweenLite.to(".full-screen-div", .333, {
		scale : 0,
		transformOrigin : "center",
		onComplete : function() {
			$(".full-screen-div").html("")
		}

	})
}


function gradeChose(radioBTN) {
	$('.btn-outline-secondary.btn-group').removeClass('active');
	if (radioBTN != null)
		$('#currentlearnergrade').val($(radioBTN).val())
}

$(document).ready(function() {
	TweenLite.to(".full-screen-div", .333, {
		scale : 0,
		transformOrigin : "center"
	})
	loadContent("login.html")
})