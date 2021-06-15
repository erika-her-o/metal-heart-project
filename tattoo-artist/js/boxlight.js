const images = document.querySelectorAll('.img-gallery');
const imagesLight = document.querySelector('.add-img');
const containerLight = document.querySelector('.img-light');

images.forEach(picture => {
    picture.addEventListener('click', () => {
        appearImage(picture.getAttribute('src'));
    });
});

containerLight.addEventListener('click', (e)=>{
    if (e.target !== imagesLight) {
        containerLight.classList.toggle('show');
        imagesLight.classList.toggle('showImage');
    }
});

const appearImage = (picture) => {
    imagesLight.src = picture;
    containerLight.classList.toggle('show');
    imagesLight.classList.toggle('showImage');
};