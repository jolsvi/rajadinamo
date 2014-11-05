$(document).ready(function(){
	var pagebody = $("#pagebody");
	var themenu  = $("#navmenu");
	var topbar   = $("#toolbarnav");
	var content  = $("#content");
	var viewport = {
    	width  : $(window).width(),
    	height : $(window).height()
	};
	// retrieve variables as 
	// viewport.width / viewport.height
	
	function openme() { 
		$(function () {
		    topbar.animate({
		       left: "290px"
		    }, { duration: 300, queue: false });
		    pagebody.animate({
		       left: "290px"
		    }, { duration: 300, queue: false });
		});
	}
	
	function closeme() {
		var closeme = $(function() {
	    	topbar.animate({
	            left: "0px"
	    	}, { duration: 180, queue: false });
	    	pagebody.animate({
	            left: "0px"
	    	}, { duration: 180, queue: false });
		});
	}

	// checking whether to open or close nav menu
	$("#menu-btn").live("click", function(e){
		e.preventDefault();
		var leftval = pagebody.css('left');
		
		if(leftval == "0px") {
			openme();
		}
		else { 
			closeme(); 
		}
	});
	
	// loading page content for navigation
	$("a.navlink").live("click", function(e){
		e.preventDefault();
		var linkurl     = $(this).attr("href");
		var linkhtmlurl = linkurl.substring(1, linkurl.length);
		
		var imgloading  = '<center style="margin-top: 70px;"><img src="assets/img/preloader.gif" alt="loading..." /></center>';
		
		closeme();
		
		$(function() {
			topbar.css("top", "0px");
			window.scrollTo(0, 1);
		});
		
		content.html(imgloading);
		
		setTimeout(function() { content.load(linkhtmlurl, function() { /* no callback */ }) }, 1200);
	});
});