let photoIndex;
const sliderArr = [];

let mainContainer = document.querySelector(".main-container");
console.log(mainContainer);
let photoContainer = document.getElementById("photo-container");
let photos = document.getElementById("photo-show");
let closeButton = document.getElementById("close-button");
let previousButton = document.getElementById("previous-button");
let nextButton = document.getElementById("next-button");
let loader = document.getElementById("loader");
mainContainer.style.display = "none";

window.addEventListener("load", () => {
  loader.style.display = "none";
  mainContainer.style.display = "grid";
});

let photoGallery = document.getElementsByClassName("photo-gallery");
let imgSrc = document.getElementsByClassName("photo");

// imgSrc populate with photos URLs
for (let i = 0; i < imgSrc.length; i++) {
  if (imgSrc[i].src != document.URL) {
    sliderArr.push(imgSrc[i].src);
  }
}

// previous button function
previousButton.addEventListener("click", () => {
  if (photoIndex <= 0) {
    photos.src = sliderArr[sliderArr.length - 1];
    photoIndex = sliderArr.length - 1;
  } else {
    photos.src = sliderArr[photoIndex - 1];
    photoIndex--;
  }
});

// next button function
nextButton.addEventListener("click", () => {
  if (photoIndex >= sliderArr.length - 1) {
    photos.src = sliderArr[0];
    photoIndex = 0;
  } else {
    photos.src = sliderArr[photoIndex + 1];
    photoIndex++;
  }
});

// photo button function
for (let i = 0; i < photoGallery.length; i++) {
  photoGallery[i].addEventListener("click", () => {
    photoIndex = i;
    photos.src = sliderArr[i];
    photoContainer.classList.toggle("hide");
    mainContainer.style.filter = "blur(4px)";
    return photoIndex;
  });
}

// close button function
closeButton.addEventListener("click", () => {
  photoContainer.classList.toggle("hide");
  mainContainer.style.filter = "blur(0)";
});
