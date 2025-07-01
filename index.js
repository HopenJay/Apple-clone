// For the hamburger menu at the top
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.hamburger').classList.toggle('hambu');
}
)


// const main = [
//   {
//     class: "item-i",
//     bigP: "Purchase with purpose.",
//     smallP: "Join us and (RED) in the fight against AIDS.",
//     div: true,
//     divContent: {
//       buttons: [
//         {class: "button1", text: "Learn more"},
//         {class: "button2", text: "Shop"}  
//       ]
//     },
//     imgSrc: "images/red.png",
//     imgAlt: "I took it from their main site a screenshot of a picture of the red Iphones"
//   }
// ]

// const mainContainer = document.querySelector(".main");

// main.forEach(item => {
//   const div = document.createElement("div");
//   div.className = item.class;

//   //div section if exists.
//   if(item.div) {
//     const div = document.createElement("div");

//     // Buttons Div
//   if(item.buttons && item.buttons.length > 0) {
//     const buttonsDiv = document.createElement("div");
//     if(item.buttonsDivId) buttonsDiv.id = item.buttonsDivId;

//     item.buttons.forEach(btn => {
//       const button = document.createElement("button");
//       button.className = btn.class || "";
//       button.textContent = btn.text;
//       if(btn.id) button.id = btn.id;
//       buttonsDiv.appendChild(button);
//     });

//     div.appendChild(buttonsDiv);
//     div.appendChild(div);
//   }
//   }

//   // Big Text
//   if(item.bigP) {
//     const bigText = document.createElement("p");

    
//   }
// }) I stopped this shit cause the data between the three div were too different

const submain = [
  {
    class: "item-iv",
    bigText: "iPhone 16",
    smallText: "Hello, Apple Intelligence.",
    buttons: [
      { class: "btn0", text: "Learn more" },
      { class: "btn1", text: "Buy" }
    ]
  },
  {
    class: "item-v",
    bigText: "iPad ",
    spanText: "air",
    smallText: "Two sizes. Faster chip. Does it all.",
    smallTextClass: "Small one",
    bigTextClass: "Big one",
    buttons: [
      { class: "button1", text: "Learn more" },
      { class: "button2", text: "Buy" }
    ],
    extraDiv: {
      class: "change",
      pClass: "change-colour",
      pText: "Hello, Apple Intelligence."
    }
  },
  {
    class: "item-vi",
    bigText: "AirPods Pro 2",
    smallText: "Now with a Hearing Aid feature.",
    smallTextSup: "3",
    buttons: [
      { class: "button1", text: "Learn more" },
      { class: "button2", text: "Buy" }
    ]
  },
  {
    class: "item-vii",
    hadto: true,
    hadtoContent: {
      imgSrc: "images/apple.jpg",
      imgAlt: "apple logo",
      pText: "WATCH"
    },
    bigText: "SERIES 10",
    smallText: "Thinstant classic.",
    smallTextClass: "smaller",
    buttonsDivId: "hadto1point0",
    buttons: [
      { class: "button1", text: "Learn more" },
      { class: "button2", text: "Buy" }
    ]
  },
  {
    class: "item-viii",
    hadto: true,
    hadtoContent: {
      imgSrc: "images/apple.jpg",
      imgAlt: "apple logo",
      pText: "Trade In"
    },
    smallText: "Get $180-$650 in credit when you trade in iPhone 12 or higher.",
    smallTextClass: "smaller",
    smallTextId: "smaler",
    smallTextSup: "4",
    buttonsDivId: "hadto1point1",
    buttons: [
      { class: "button1", text: "Get your estimate", id: "butto" }
    ]
  },
  {
    class: "item-ix",
    hadto: true,
    hadtoContent: {
      imgSrc: "images/apple.jpg",
      imgAlt: "apple logo",
      pText: "Card"
    },
    smallText: "Get up to 3% Daily Cash back with every purchase.",
    smallTextClass: "smaller",
    smallTextId: "smaer",
    buttonsDivId: "hadto1point2",
    buttons: [
      { class: "button1", text: "Learn more" },
      { class: "button2", text: "Apply now", id: "butt" }
    ]
  }
];

const container = document.getElementById("submain-container");

submain.forEach(item => {
  const div = document.createElement("div");
  div.className = item.class;

  // hadto section if exists
  if(item.hadto) {
    const hadtoDiv = document.createElement("div");
    hadtoDiv.className = "hadto";

    const img = document.createElement("img");
    img.src = item.hadtoContent.imgSrc;
    img.alt = item.hadtoContent.imgAlt;

    const p = document.createElement("p");
    p.textContent = item.hadtoContent.pText;

    hadtoDiv.appendChild(img);
    hadtoDiv.appendChild(p);
    div.appendChild(hadtoDiv);
  }

  // Big Text
  if(item.bigText) {
    const bigP = document.createElement("p");

    if(item.class === "item-vii") {
        // bigP.className = "bold-only"; This shit was a mistake
        bigP.textContent = item.bigText;
        } else {
        // as before
        bigP.className = item.bigTextClass || "Big";
    
        if(item.spanText) {
          // e.g. iPad <span>air</span>
          bigP.innerHTML = `${item.bigText}<span>${item.spanText}</span>`;
        } else {
          bigP.textContent = item.bigText;
        }
    }


    div.appendChild(bigP);
  }

  // Small Text
  if(item.smallText) {
    const smallP = document.createElement("p");
    smallP.className = item.smallTextClass || "Small";

    let smallTextContent = item.smallText;
    if(item.smallTextSup) {
      smallTextContent += `<sup>${item.smallTextSup}</sup>`;
    }
    smallP.innerHTML = smallTextContent;

    if(item.smallTextId) smallP.id = item.smallTextId;

    div.appendChild(smallP);
  }

  // extraDiv with text if exists
  if(item.extraDiv) {
    const extraDiv = document.createElement("div");
    extraDiv.className = item.extraDiv.class;

    const extraP = document.createElement("p");
    extraP.className = item.extraDiv.pClass;
    extraP.textContent = item.extraDiv.pText;

    extraDiv.appendChild(extraP);
    div.appendChild(extraDiv);
  }

  // Buttons Div
  if(item.buttons && item.buttons.length > 0) {
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "submainButtons";
    if(item.buttonsDivId) buttonsDiv.id = item.buttonsDivId;

    item.buttons.forEach(btn => {
      const button = document.createElement("button");
      button.className = btn.class || "";
      button.textContent = btn.text;
      if(btn.id) button.id = btn.id;
      buttonsDiv.appendChild(button);
    });

    div.appendChild(buttonsDiv);
  }

  container.appendChild(div);
});

const carousel0 = [
  {
    class: "slide",
    imgSrc: "Carousel(0)/bad-sisters.jpg",
    imgAlt: "bad-sisters"
  },
  {
    class: "slide",
    imgSrc: "Carousel(0)/blitz.jpg",
    imgAlt: "blitz"
  },
  {
    class: "slide",
    imgSrc: "Carousel(0)/Charlie-brown.jpg",
    imgAlt: "Charlie-brown"
  },
  {
    class: "slide",
    imgSrc: "Carousel(0)/disclaimer.jpg",
    imgAlt: "disclaimer"
  },
  {
    class: "slide",
    imgSrc: "Carousel(0)/mls.jpg",
    imgAlt: "mls"
  },
  {
    class: "slide",
    imgSrc: "Carousel(0)/shrinking.jpg",
    imgAlt: "shrinking"
  },
  {
    class: "slide",
    imgSrc: "Carousel(0)/silo.jpg",
    imgAlt: "silo"
  },
  {
    class: "slide",
    imgSrc: "Carousel(0)/Slow-horses.jpg",
    imgAlt: "Slow-horses"
  },
  {
    class: "slide",
    imgSrc: "Carousel(0)/spirited.jpg",
    imgAlt: "spirited"
  },
  {
    class: "slide",
    imgSrc: "Carousel(0)/Ted-lasso.jpg",
    imgAlt: "Ted-lasso"
  },
]

const carousel0Container = document.querySelector(".slides");

carousel0.forEach(item => {
  const div = document.createElement("div");
  div.className = item.class;

  if(item.imgSrc && item.imgAlt) {
    const img = document.createElement("img");
    img.src = item.imgSrc;
    img.alt = item.imgAlt;

    div.appendChild(img);
  }

  carousel0Container.appendChild(div);
})

const carousel1 = [
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/Balatro_Key-Art.webp",
    imgAlt: "balatro",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download (1).jpg",
    imgAlt: "down1",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download (2).jpg",
    imgAlt: "down2",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download (3).jpg",
    imgAlt: "down3",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download.jpg",
    imgAlt: "down",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/images (1).jpg",
    imgAlt: "img1",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/images.jpg",
    imgAlt: "img",
  },
//Double that shit
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/Balatro_Key-Art.webp",
    imgAlt: "balatro",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download (1).jpg",
    imgAlt: "down1",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download (2).jpg",
    imgAlt: "down2",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download (3).jpg",
    imgAlt: "down3",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/download.jpg",
    imgAlt: "down",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/images (1).jpg",
    imgAlt: "img1",
  },
  {
    class: "carousel1-slide",
    imgSrc: "Carousel(1)images/images.jpg",
    imgAlt: "img",
  },
]

const carousel1Container = document.querySelector(".carousel1-track");

carousel1.forEach(item => {
  const div = document.createElement("div");
  div.className = item.class;

  if(item.imgSrc && item.imgAlt) {
    const img = document.createElement("img");
    img.src = item.imgSrc;
    img.alt = item.imgAlt;

    div.appendChild(img);
  }

  carousel1Container.appendChild(div);
})

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

// console.log(slides);
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