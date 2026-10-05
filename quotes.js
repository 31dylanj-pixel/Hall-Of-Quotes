/* =========================================================
   HALL OF QUOTES
   QUOTE DATABASE
========================================================= */

const quotes = [

    {
        text: "Nah",
        author: "Dylan J.",
        date: "October 4, 2026"
    },

    {
        text: "Hm?",
        author: "Tun",
        date: "October 4, 2026"
    },

    {
        text: "Wait What?",
        author: "Fenix",
        date: "October 4, 2026"
    },

    {
        text: "... What?",
        author: "Isaac",
        date: "October 4, 2026"
    },

    {
        text: "We're doing Something...",
        author: "Dylan J.",
        date: "October 4, 2026"
    },

    {
        text: "Bro bro bro bro bro bro bro bro...",
        author: "Bohden",
        date: "October 4, 2026"
    },

    {
        text: "Nom Nom Nom",
        author: "Nate",
        date: "October 4, 2026"
    },

    {
        text: "Yap Yap Yap",
        author: "Fenix",
        date: "October 4, 2026"
    },

    {
        text: "Guys Imma use my Ice Cream Ticket",
        author: "Nate",
        date: "October 4, 2026"
    },

    {
        text: "I'm sorry Water Bottle 🥺",
        author: "Isaac",
        date: "October 4, 2026"
    },

    {
        text: "I think the Ice Cream went through Chernobyl BRUH",
        author: "Dylan J.",
        date: "October 4, 2026"
    },

    {
        text: "Huh",
        author: "Nate",
        date: "October 4, 2026"
    },

    {
        text: "Yo Nate, Yo Nate, Say Huh",
        author: "Jerry",
        date: "October 4, 2026"
    },

    {
        text: "11:28:14",
        author: "Anonymous",
        date: "October 4, 2026"
    },

    {
        text: "Yes Jerry?",
        author: "Tun",
        date: "October 4, 2026"
    },

    {
        text: "Enzo is here with the huzz",
        author: "Nate",
        date: "October 4, 2026"
    },

    {
        text: "Tun did you know that your name spelled backwards is Nut?",
        author: "Enzo",
        date: "October 4, 2026"
    },

    {
        text: "What is this guy on?",
        author: "Isaac",
        date: "October 4, 2026"
    },

    {
        text: "Noooooo",
        author: "Enzo",
        date: "October 4, 2026"
    },

];


/* =========================================================
   ELEMENTS
========================================================= */

const quoteGrid =
    document.getElementById("quoteGrid");

const quoteCount =
    document.getElementById("quoteCount");

const authorCount =
    document.getElementById("authorCount");

const emptyState =
    document.getElementById("emptyState");


/* =========================================================
   ROTATIONS
========================================================= */

const rotations = [
    -1.2,
    0.8,
    -0.5,
    1.1,
    -0.8,
    0.4,
    1.3,
    -1
];


/* =========================================================
   CREATE QUOTE CARD
========================================================= */

function createQuoteCard(
    quote,
    index
) {

    const card =
        document.createElement("article");

    card.className = "quote-card";

    const rotation =
        rotations[index % rotations.length];

    card.style.setProperty(
        "--rotation",
        `${rotation}deg`
    );

    card.style.setProperty(
        "--delay",
        `${index * 70}ms`
    );


    /*
        Slightly vary the pin position.
    */

    const pinOffset =
        [-2, 1, 0, 2][index % 4];


    card.innerHTML = `

        <div
            class="pin"
            style="--pin-offset: ${pinOffset}px"
        >
            <span></span>
        </div>

        <div class="quote-content">

            <div class="opening-mark">
                “
            </div>

            <p class="quote-text">
                ${quote.text}
            </p>

            <div class="closing-mark">
                ”
            </div>

            <div class="quote-author">
                — ${quote.author}
            </div>

            <div class="quote-date">
                ${quote.date}
            </div>

        </div>

    `;


    quoteGrid.appendChild(card);
}


/* =========================================================
   RENDER
========================================================= */

function renderQuotes() {

    quoteGrid.innerHTML = "";

    if (!quotes.length) {

        emptyState.classList.add("visible");

        quoteCount.textContent = "0";
        authorCount.textContent = "0";

        return;
    }


    emptyState.classList.remove("visible");


    quotes.forEach(
        (quote, index) => {
            createQuoteCard(
                quote,
                index
            );
        }
    );


    quoteCount.textContent =
        quotes.length;


    const authors =
        new Set(
            quotes.map(
                quote => quote.author
            )
        );


    authorCount.textContent =
        authors.size;
}


/* =========================================================
   START
========================================================= */

renderQuotes();
