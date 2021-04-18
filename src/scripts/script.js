let currentSlide = 1

// Carousel controls
const carouselControls = (slidePosition) => {
    showCarousel(currentSlide += slidePosition)
    resetTimer()
}

// Display current item
const showSlide = (slidePosition) => {
    showCarousel(currentSlide = slidePosition)
}

const showCarousel = (slidePosition) => {
    // Get the carousel images and text
    let items = document.getElementsByClassName('carousel__item')
    
    // If carousel reaches the end, restart from the beginning
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

// Reset auto transition timer when button is clicked
const resetTimer = () => {
    // Clear timer
    clearInterval(autoTransition)
    // Restart timer
    autoTransition = setInterval(autoChange, 8000)
}

// Change to next item
const autoChange = () => {
    carouselControls(1)
}

// New timer to change item every 8 seconds
let autoTransition = setInterval(autoChange, 8000)

showCarousel(currentSlide)