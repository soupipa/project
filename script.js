function selectImage(imageElement) {
    const images = document.getElementsByClassName('image');
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove('selected-image'); 
    }
    imageElement.classList.add('selected-image'); 
  }
  
  const images = document.getElementsByClassName('image');
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
      selectImage(this); 
    });
  }