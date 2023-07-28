const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    }); 
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}
function selectItem(item) {
  const selectedItemDiv = document.getElementById('selected-item');
  selectedItemDiv.textContent = `You selected: ${item}`;
}

document.getElementById('registration-form').addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

    
      const formData = {
        name: name,
        email: email,
        message: message
      };

    
      console.log(formData);
    });


