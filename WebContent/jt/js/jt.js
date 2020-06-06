// SHOWS/HIDES THE MESSAGE BOX,
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
var func = function() {
	window.location.replace("regWizard.html")
}
function register() {
	toggleConfirmationBox(func, "A confirmation email has been sent to you")
}

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

function showDialogPage(url) {
	$("<div/>").load(
			url,
			function(response) {
				openFullScreenDiv("<div class='dialog-popup-content'>"
						+ response + "</div>")
			})
	return -1
}

function gradeChose(radioBTN) {
	$('.btn-outline-secondary.btn-group').removeClass('active');
	if (radioBTN != null)
		$('#currentlearnergrade').val($(radioBTN).val())
}
