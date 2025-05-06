const slideContainer = document.querySelector('.carousel1'); //This is for the other carousel to be able to enable the pause and play effect
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let index = 1; 
let slideId;
// Cloning the first and last image
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length-1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
// appending n prepending the first n last image
slide.append(firstClone);
slide.prepend(lastClone);
// 18 n 20 returns the first image to its position.
const slideWidth = slides[index].clientWidth;
// For the below .style what I think actually happened is that the -1 is put there to act against the translate but I might be wrong. So I may ask chatGPT later.
slide.style.transform = `translate(${-slideWidth * index}px)`;

console.log(slides);
// Fun act I just learnt interval is an inbuilt method that only requires you to input our time using the interval variable and the values you are working with inside the method. I will use more of it as time goes on.
const startSlide = () => {
    slideId = setInterval(() => {
        slides = document.querySelectorAll('.slide');
        if(index >= slides.length-1) return;
        index++;
        slide.style.transform = `translate(${-slideWidth * index}px)`;
        slide.style.transition = '.7s';
    }, interval)
}

slide.addEventListener('transitionend', ()=> {
    slides = document.querySelectorAll('.slide');
    if(slides[index].id === firstClone.id) {
        slide.style.transition = 'none'; //if you want to see how the transition is working seamlessly just comment out this line of code.
        index = 1;
        slide.style.transform = `translate(${-slideWidth * index}px)`;
    }
})

startSlide();