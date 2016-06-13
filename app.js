var main = function() {
	
	// Switch Branching Pages // Home / CV / Research / Drawing / Teaching
	$('.home').click(function() {
		// Switch Pages
		$(".show").fadeOut(0).removeClass('show').addClass('noshow');
		$('#main_home').fadeIn(100).addClass('show').removeClass('noshow');
		// Switch Navigators
		$('.a_navi_here').addClass('a_navi').removeClass('a_navi_here');
		$('.a_anvi .home').children().removeClass('a_navi').addClass('a_navi_here');
	});
	$('.CV').click(function() {
		// Switch Pages
		$(".show").fadeOut(0).removeClass('show').addClass('noshow');
		$('#main_CV').fadeIn(200).addClass('show').removeClass('noshow');
		// Switch Navigators
		$('.a_navi_here').addClass('a_navi').removeClass('a_navi_here');
		$('a.CV').children().removeClass('a_navi').addClass('a_navi_here');
	});
	$('.research').click(function() {
		// Switch Pages
		$(".show").fadeOut(0).removeClass('show').addClass('noshow');
		$('#main_research').fadeIn(200).addClass('show').removeClass('noshow');
		// Switch Navigators
		$('.a_navi_here').addClass('a_navi').removeClass('a_navi_here');
		$('a.research').children().removeClass('a_navi').addClass('a_navi_here');
	});
	$('.drawing').click(function() {
		// Switch Pages
		$('.show').fadeOut(0).removeClass('show').addClass('noshow');
		$('#main_drawing').fadeIn(200).addClass('show').removeClass('noshow');
		// Switch Navigators
		$('.a_navi_here').addClass('a_navi').removeClass('a_navi_here');
		$('a.drawing').children().removeClass('a_navi').addClass('a_navi_here');
	});
	$('.teaching').click(function() {
		// Switch Pages
		$('.show').fadeOut(0).removeClass('show').addClass('noshow');
		$('#main_teaching').fadeIn(200).addClass('show').removeClass('noshow');
		// Switch Navigators
		$('.a_navi_here').addClass('a_navi').removeClass('a_navi_here');
		$('a.teaching').children().removeClass('a_navi').addClass('a_navi_here');
	});
};

$(document).ready(main);
