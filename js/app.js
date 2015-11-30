//Problem - user when clicking an image goes to a dead end
//Solutions - create an overlay with a large image : Lightbox

//jquery objects
//Add overlay
var $overlay = $('<div id = "overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//Add image to overlay
$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);



// Capture click event on a link to an image
$('#imageGallery a').click(function(event){
    event.preventDefault();
    // this is the particular link we clicked. Return a string of the link.
    var imageLocation =  $(this).attr("href"); 
    
    // Update overlay with the image linked 
    $image.attr("src", imageLocation);
    
    // Show the overlay
    $overlay.show();
    
    // Get child's alt attr and set caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});


//When overlay is clicked it hide the overlay
$overlay.click(function(){
 $overlay.hide()
});