export function submain() {
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
};