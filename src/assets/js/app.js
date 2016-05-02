$(document).foundation();

$(document).ready(function(){
	console.log(location.pathname);
	if(location.pathname == '/about.html'){
		$('#aboutMenu').addClass('active');
	}
	else if(location.pathname == '/services.html'){
		$('#servicesMenu').addClass('active');
	}
	else if(location.pathname == '/products.html'){
		$('#productsMenu').addClass('active');
	}
	else if(location.pathname == '/careers.html'){
		$('#careersMenu').addClass('active');
	}
	else if(location.pathname == '/contact.html'){
		$('#contactMenu').addClass('active');
	}
	window.careers = {}

	window.socialShareData = function(title){
		careers.title = title;
		console.log(careers);
		$('[data-type]').attr('data-title',title);
	}


	fullpage.initialize('#fullpage', {
          anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
          css3:true,
          navigation:true,
          fixedElements: '#fixme, .footer',
          navigationTooltips: ['jumbotron', ' ', ' ',' ' , ' ', ' '],
          easing:'easeOutQuad',
          //events
          onLeave: function(index, nextIndex, direction){
          	console.log(`on leave ${index}`);
          },
          afterLoad: function(anchorLink, index){},
          afterRender: function(){},
          afterResize: function(){},
          afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
          onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
      });
});
