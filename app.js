var main = function() {
	//////////////////////////////////////////////////////////////////////
	//
	// Switch Branching Pages // Home / CV / Research / Drawing / Teaching
	//
	//////////////////////////////////////////////////////////////////////
	var map = ['#home','#CV','#research','#drawing','#teaching']
	$('a').click( function() {
		var id = $(this).attr('href');
		var index = map.indexOf(id);
		if (index >= 0) {
			$('div.nav_here').addClass('nav').removeClass('nav_here');
			$("a.nav").eq(index).children().addClass('nav_here').removeClass('nav')

			$('.torso').fadeOut(0).addClass('noshow');
			$(id).fadeIn(100).removeClass('noshow');
		}
	})
	//////////////////////////////////////////////
	//  To Show or Disable 'HELP Panel'
	//////////////////////////////////////////////
	//  Toggle HELP panel

	// keyCode '191' === '/'  -->  shift + / = '?'
	$(document).keydown(function(event) {
		if (event.shiftKey && event.which == 191) {
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
	//  Close buttom
	$('.help_close').mouseenter(function() {
		$(this).css('opacity','0.8');
	});
	$('.help_close').mouseleave(function() {
		$(this).css('opacity','0.3');
	});

	//////////////////////////////////////////////
	//  Show draggable item
	//////////////////////////////////////////////
	$(document).keypress(function(event) {
		// keyCode '120' --> 'x'
		if(event.which === 120) {
			$('body').append(
			'<div class="xd" style="position:fixed; right:50px; bottom:50px;">'+
			'<img src="pic/Pika.png" width="400"/>'+'</div>'
			);
			$('.xd').effect('bounce',{times:3},500);
			$('.xd').draggable();
		}
	});
};

$(document).ready(main);
