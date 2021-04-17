let currentSlide = 1

// Carousel controls
const carouselControls = (slidePosition) => {
    showCarousel(currentSlide += slidePosition)
}

// Display current item
const showSlide = (slidePosition) => {
    showCarousel(currentSlide = slidePosition)
}

const showCarousel = (slidePosition) => {
    // Get the carousel images and text
    let items = document.getElementsByClassName('carousel__item')
    

    if (slidePosition > items.length) {
        currentSlide = 1
    } else if (slidePosition < 1) {
        currentSlide = items.length
    }

    // Make sure unfocused items are not shown
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'none'
    }

    // Change the styling of current item so that it is not hidden
    items[currentSlide-1].style.display = 'flex'
}

showCarousel(currentSlide)