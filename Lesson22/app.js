// Events to check that page is loaded (should be applıed to window object):
// DOMContentLoaded - DOM fully loaded
// load - all elements (including images and styles) are loaded
window.addEventListener('load',function(){
  // Select all images
  // Select previous and next buttons
  // Select indicators
  const images = document.getElementsByTagName("img");
  const prevImage = document.getElementById("prev-btn");
  const nextImage = document.getElementById("next-btn");
  const indicators = document.getElementsByClassName("indicator");

  // Create application state to keep track of the current index

  let index = 0;
  let timer = setInterval(showNextImage, 3000);

  // Show images function
  function showImage() {
    // Remove active class from all images
    // For every element in images array call a function that removes "active" class
    for(let i = 0; i<images.length; i++){
      images[i].classList.remove("active");
    }
    

    // Remove active class from all indicators
    // Use loop to loop through all element of array

    for(let i = 0; i<indicators.length; i++){
      indicators[i].classList.remove("active");
    }

    // Add active class to the current image and indicator
    // images[]

    images[index].classList.add("active");
    indicators[index].classList.add("active");
    timer = setInterval(showNextImage, 3000);
  }

  // handle next click
  function showNextImage() {
    // increase currentIndex. What happens if the current index is > than number of images that we have?
    clearInterval(timer);
    if(index >= images.length-1){
      index=0;
    }else{
      index += 1;
    }
    showImage();
  }

  nextImage.addEventListener("click", showNextImage);

  // handle previous click
  function showPrevImage() {
    // [image1, image2, image3]
    // decrease currentIndex. What happens if the current index is < 0?
    // if else condition
    clearInterval(timer);
    if(index <= 0){
      index=images.length-1;
    } else {
      index -= 1;
    }
    showImage();
  }

  // Add event listeneters for button clicks

  prevImage.addEventListener("click", showPrevImage);

  // Switch images after 3 seconds automatically using setInterval function
  // Use 3000 value for 3 second delay
});