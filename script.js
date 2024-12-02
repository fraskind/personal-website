const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        // const currNextSlide

        let newIndex = ([...slides.children].indexOf(activeSlide) + offset) % slides.children.length
        // Looping aspect
        if (newIndex < 0) newIndex = slides.children.length - 1
        // if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active

        // Update prev/next slides
        prevIndex = (newIndex - 1) % slides.children.length;
        if (prevIndex < 0) prevIndex = slides.children.length - 1;

        nextIndex = (newIndex + 1) % slides.children.length;
        
        slides.children[prevIndex].dataset.prev = true;
        slides.children[nextIndex].dataset.next = true;
        // Remove prev and next from other slides
        [...slides.children].forEach((slide, index) => {
            if (index !== prevIndex) delete slide.dataset.prev;
            if (index !== nextIndex) delete slide.dataset.next;
        });
    })
})