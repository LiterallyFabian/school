$('#program').change(function(){ //if the select value gets changed
var imageSource = $(this).val(); //get the selected value
if(imageSource && imageSource != ""){ //if it has data
   $('#schemapicture').html(`<img src="img/${imageSource}.jpg">`); // insert image in div image-location
} else {
   $('#schemapicture').html(''); //remove content from div image-location, thus removing the image
}
})
