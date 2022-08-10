$(document).ready(function(){
	// console.log("he he");

/*Start Header Section*/
/*Start Banner Section*/

// $(".carousel").carousel({
// 	interval:500px;
// })


/*End Banner Section*/

/*End Header Section*/

/*Start Info Section*/
$(window).scroll(function(){
	let getscrolltop = $(this).scrollTop();

	if(getscrolltop >= 220 ){
		$(".infotexts").addClass("fromlefts");
		$(".infopics").addClass("fromrights");
	}else{
		$(".infotexts").removeClass("fromlefts");
		$(".infopics").removeClass("fromrights");
	};
});

/*End Info Section*/

// Start ADV Section

$("#videos").click(function(){
	var getmodal = $(this).data("bs-target");
	var getvideosrc = $(this).data("video");
	var videourlwithauto = getvideosrc +"?autoplay=1";

	$(getmodal + " iframe").attr("src", videourlwithauto);

	$(getmodal + " button.btn-close").click(function(){
		$(getmodal + " iframe").attr("src",getvideosrc);
	});

	$(getmodal).click('hidden.bs.modal',function(){
		$(getmodal + " iframe").attr("src", getvideosrc);
	});


});

// End ADV Section

// ...................................................

// Start premises Section

$("#lightslider").lightSlider({
	item:4,
	// auto:true,
    loop:true,
    slideMove:1,
   	speed:600
}).play();

// End premises Section
// ..............................................................

// Start Pricing Section
$(window).scroll(function(){
		let getscroll = $(this).scrollTop();
		// console.log(getscroll);

		if(getscroll >= 2450){
			$(".cardones").addClass("movelefts");
			$(".cardtwos").addClass("movebottoms");
			$(".cardthrees").addClass("moverights");
		}else{
			$(".cardones").removeClass("movelefts");
			$(".cardtwos").removeClass("movebottoms");
			$(".cardthrees").removeClass("moverights");
		}
});


// End Pricing Section

// ..................................................................

// Start Join Us Section

$("#accordion").accordion();

// End Join Us Section

// ................................................................

// Start Footer Section
	$("#getyear").text(new Date().getUTCFullYear());
// Start Footer Section

// .................................................................

// Start progress
$(window).scroll(function(){
		var getprogress = $("#progresses")
		var getprogressval = $("#progressesvalues");
		var getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		var getscrollheight = $(document).height();

		var getclientheight = $(window).height();

		var calcheight = getscrollheight - getclientheight;

		var getfinalheight = Math.round(getscrolltop * 100 / calcheight);

// 		// console.log(getfinalheight);

// 		// BY javascript

// 		// var getscrollheight = document.documentElement.scrollHeight;
// 		// // console.log(getscrollheight);
// 		// var getclientheight = document.documentElement.clientHeight;
// 		// // console.log(getclientheight);
// 		// var calcheight = getscrollheight - getclientheight;

// 		// var getfinalheight = Math.round(getscrolltop * 100 / calcheight);

// 		// console.log(getfinalheight);


		getprogressval.text(`${getfinalheight}%`);
		getprogress.css({
			"background-color":`conic-gradient(steelblue${getfinalheight}%,red${getfinalheight}%)`
		});

});


// End progress


});


// 28FR