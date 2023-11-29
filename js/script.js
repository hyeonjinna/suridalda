$(function(){
	$(".dot a:nth-child(1)").click(function(){
		$(".left_b").show();
		$(".right_b").hide();
	});
	$(".dot a:nth-child(2)").click(function(){
		$(".left_b").hide();
		$(".right_b").show();
	});
});