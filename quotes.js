/* =========================================================
   HALL OF QUOTES
   QUOTE DATABASE
========================================================= */

const quotes = [

    {
        text: "Why are we doing this again?",
        author: "Alex",
        date: "October 5, 2026"
    },

    {
        text: "I actually understood that for once.",
        author: "Sam",
        date: "October 5, 2026"
    },

    {
        text: "That sounds like a future me problem.",
        author: "Jordan",
        date: "October 4, 2026"
    },

    {
        text: "Wait... we're supposed to write this down?",
        author: "Anonymous",
        date: "October 3, 2026"
    },

    {
        text: "I have a plan. I just don't know what it is yet.",
        author: "Taylor",
        date: "October 2, 2026"
    },

    {
        text: "Bro, that was NOT the answer.",
        author: "Chris",
        date: "October 1, 2026"
    },

    {
        text: "Can we just pretend that didn't happen?",
        author: "Anonymous",
        date: "September 30, 2026"
    },

    {
        text: "I swear I knew this yesterday.",
        author: "Morgan",
        date: "September 29, 2026"
    }

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
