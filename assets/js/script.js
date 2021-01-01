$( document ).ready(function() {
    $("#logoB").hide();

    $('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
});

$("#logoA").mouseenter(function () { 
    $("#logoB").toggle(1200);
    $("#logoA").toggle(1200);
});
$("#logoB").mouseleave(function () { 
    $("#logoB").toggle(1200);
    $("#logoA").toggle(1200);
});