$(document).ready( function(){
	var currentFloor = 2;
	var floorPath = $(".main-image path");
	var counterUp = $('.counter-up');
	var counterDown = $('.counter-down');
	floorPath.on("mouseover", function() {
		currentFloor = $(this).attr("data-floor");
		$(".counter").text(currentFloor);

	});

	counterUp.on("click", function (){

		if(currentFloor < 18){
			currentFloor++;
			usCurrentFloor = currentFloor.toLocaleString ("en-US", { minimumIntegerDigits: 2, useGrouping: false});
			$(".counter").text(usCurrentFloor);
			$(".home-image path").removeClass("current-floor");
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
			
		}
	});
	counterDown.on("click", function (){

		if(currentFloor > 2){
			currentFloor--;
			usCurrentFloor = currentFloor.toLocaleString ("en-US", { minimumIntegerDigits: 2, useGrouping: false});
			$(".counter").text(usCurrentFloor);
			$(".home-image path").removeClass("current-floor");
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
		}
	});
});