$(document).ready(function(){
	var lis = $("#pub > LI").clone();
	var pubdict = {"immu": [],  "comp": [], "clin": [], "oth": []};

	$.each(lis, function(i, el){
		var c = $(el).attr("class");
    	pubdict[c].push(el);
	});

	$("#immupub").empty().append(pubdict.immu);
	$("#comppub").empty().append(pubdict.comp);
	$("#clinpub").empty().append(pubdict.clin);
	$("#othpub").empty().append(pubdict.oth);

	$(".bydate").hover(
		function(){ $(this).addClass("hovered"); $(".byarea").addClass("hovernext"); },
		function(){ $(this).removeClass("hovered");  $(".byarea").removeClass("hovernext"); }
	);
	$(".byarea").hover(
		function(){ $(this).addClass("hovered");  $(".bydate").addClass("hovernext"); },
		function(){ $(this).removeClass("hovered"); $(".bydate").removeClass("hovernext"); }
	);
	$(".bydate").click(function(){ 
		$(this).addClass("clicked");
		$(".byarea").removeClass("clicked");
		$(".pubbydate").css("display", "block");
		$(".pubbyarea").css("display", "none");
	});
	$(".byarea").click(function(){ 
		$(this).addClass("clicked");
		$(".bydate").removeClass("clicked");
		$(".pubbyarea").css("display", "block");
		$(".pubbydate").css("display", "none");
	});
});