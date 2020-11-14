
const imagesToLoad = document.querySelectorAll('img[data-src]');


const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -500px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

//first check to see if Intersection Observer is supported
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else { // just load All images if not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
