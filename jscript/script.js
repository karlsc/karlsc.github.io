console.log("Hello world");

$(document).ready(function(){
	$("img").mouseenter(function(){
		$(this).fadeTo("slow",0.4);
	});
	$("img").mouseleave(function(){
		$(this).fadeTo("fast",1);
	});
});
