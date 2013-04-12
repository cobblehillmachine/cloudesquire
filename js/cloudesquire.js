$(document).ready(function() {
	window.scrollTo(0, 1);
	$('body').delay(500).fadeIn('slow');
	$('#nav .nav-link:last').addClass('last');
	$('#features .feature').each(function(i) {
		if ((i + 1) % 3 == 0) {$(this).addClass('last');}
	});
	$('#signup .input-cont').each(function(i) {
		if ((i + 1) % 2 == 0) {$(this).addClass('last');}
	});
	customSlideshow();
});

function scrollToFeatures() {
	$('body').scrollTo($('#features'), 1000 );
}

function scrollToPricing() {
	$('body').scrollTo($('#pricing'), 1000 );
}

function scrollToSignup() {
	$('body').scrollTo($('#signup'), 1000 );
}


function customSlideshow() {
    //rotation speed and timer
    var speed = 5000;
    var run = setInterval('rotate()', speed);  
     
    //grab the width and calculate left value
    var item_width = $('#slides li').outerWidth();
    var left_value = item_width * (-1);
	var ulWidth = item_width * 1;
         
    //move the last item before first item, just in case user click prev button
    $('#slides li:first').before($('#slides li:last'));
     
    //set the default item to the correct position
    $('#slides ul').css({'left' : left_value});
 
    //if user clicked on prev button
    $('#prev').click(function() {
 
        //get the right position           
        var left_indent = parseInt($('#slides ul').css('left')) + item_width;
 
        //slide the item           
        $('#slides ul').animate({'left' : left_indent}, 400,function(){   
 
            //move the last item and put it as first item              
            $('#slides li:first').before($('#slides li:last'));          
 
            //set the default item to correct position
            $('#slides ul').css({'left' : left_value});
         
        });
 
        //cancel the link behavior           
        return false;
             
    });
 
  
    //if user clicked on next button
    $('#next').click(function() {
         
        //get the right position
        var left_indent = parseInt($('#slides ul').css('left')) - item_width;
         
        //slide the item
        $('#slides ul').animate({'left' : left_indent}, 400, function () {
             
            //move the first item and put it as last item
            $('#slides li:last').after($('#slides li:first'));                 
             
            //set the default item to correct position
            $('#slides ul').css({'left' : left_value});
         
        });
                  
        //cancel the link behavior
        return false;
         
    });       
     
    //if mouse hover, pause the auto rotation, otherwise rotate it
     $('#slides').hover(
           
          function() {
              clearInterval(run);
          },
          function() {
              run = setInterval('rotate()', speed);  
          }
      );
         
}
 
//a simple function to click next link
//a timer will call this function, and the rotation will begin :) 
function rotate() {
    $('#next').click();
}
