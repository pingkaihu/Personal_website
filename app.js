var main = function() {

	//////////////////////////////////////////////////////////////////////
	//
	// Switch Branching Pages // Home / CV / Research / Drawing / Teaching
	//
	//////////////////////////////////////////////////////////////////////
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

	//////////////////////////////////////////////
	//  To Show or Disable 'HELP Panel'
	//////////////////////////////////////////////
	//  Toggle HELP panel
	$(document).keypress(function(event) {

		// keyCode '191' === '/'  -->  shift + / = '?'
		if(event.shiftKey || event.which === 191) {
			if($('.help').css('display') === 'none') {
				$('.help').fadeIn(100);
			}
			else {
				$('.help').fadeOut(100);
			}
		}
	});
	//  Disable when click outside
	$('div').not('.help, .help_info').click(function() {
		$('.help').fadeOut(100);
	});

	//////////////////////////////////////////////
	//  Show draggable item
	//////////////////////////////////////////////
	$(document).keypress(function(event) {

		// keyCode '120' --> 'x'
		if(event.which === 120) {
			$('body').append(
			'<div class="xd" style="position:fixed; right:50px; bottom:50px;">'+
			'<img src="https://dl.dropboxusercontent.com/u/63140572/Html/Pika.png" width="400"/>'+'</div>'
			);
			$('.xd').effect('bounce',{times:3},500);
			$('.xd').draggable();
		}
	});
};

$(document).ready(main);
