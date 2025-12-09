// =========================
// CHARACTERS DATA
// =========================
const characters = [
    {
        id: 1,
        name: "Elena Gilbert",
        actor: "Nina Dobrev",
        role: "The Doppelgänger",
        emoji: "imgs/ElenaGilbert.png",
        bio: "Elena Gilbert is a compassionate high school student..."
    },
    {
        id: 2,
        name: "Stefan Salvatore",
        actor: "Paul Wesley",
        role: "The Brooding Vampire",
        emoji: "imgs/StefanSalvatore.png",
        bio: "Stefan Salvatore is a 162-year-old vampire..."
    },
    {
        id: 3,
        name: "Damon Salvatore",
        actor: "Ian Somerhalder",
        role: "The Charming Devil",
        emoji: "imgs/DamonSalvatore.png",
        bio: "Damon Salvatore embodies the darker side..."
    },
    {
        id: 4,
        name: "Bonnie Bennett",
        actor: "Kat Graham",
        role: "The Powerful Witch",
        emoji: "imgs/bonniebennett.png",
        bio: "Bonnie Bennett discovers she comes from a long line..."
    },
    {
        id: 5,
        name: "Caroline Forbes",
        actor: "Candice King",
        role: "The Vampire Queen",
        emoji: "imgs/CarolineForbes.png",
        bio: "Caroline Forbes transforms from an insecure teen..."
    },
    {
        id: 6,
        name: "Tyler Lockwood",
        actor: "Michael Trevino",
        role: "The Hybrid",
        emoji: "imgs/TylerLockwood.png",
        bio: "Tyler Lockwood's life changes when he triggers..."
    }
];

// =========================
// QUOTES DATA
// =========================
const quotes = [
    { text: "I'm not a hero, Elena. I don't do good. It's not in me.", author: "Damon Salvatore" },
    { text: "I will always choose you.", author: "Elena Gilbert" },
    { text: "The truth is, I've tried to stop thinking about you. And I can't.", author: "Stefan Salvatore" },
    { text: "I'm Klaus. The original hybrid.", author: "Klaus Mikaelson" }
];


// =========================
// PARTICLES
// =========================
function createParticles() {
    const container = document.getElementById("particles");
    const count = 30;

    for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.left = Math.random() * 100 + "%";
        p.style.animationDelay = Math.random() * 10 + "s";
        container.appendChild(p);
    }
}


// =========================
// QUOTES
// =========================
function generateRandomQuote() {
    const q = quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById("quote-text").textContent = q.text;
    document.getElementById("quote-author").textContent = "— " + q.author;
}


// =========================
// DISPLAY CHARACTERS
// =========================
function displayCharacters() {
    const grid = document.getElementById("characters-grid");

    characters.forEach(char => {
        const card = document.createElement("div");
        card.className = "character-card";
        card.onclick = () => goToCharacterPage(char.id);

        card.innerHTML = `
            <div class="character-img">
                <img src="${char.emoji}" alt="${char.name}">
            </div>
            <div class="character-info">
                <h3 class="character-name">${char.name}</h3>
                <p class="character-role">${char.role}</p>
                <p class="character-actor">Portrayed by ${char.actor}</p>
            </div>
        `;

        grid.appendChild(card);
    });
}


// =========================
// GO TO CHARACTER PAGE
// =========================
function goToCharacterPage(id) {
    sessionStorage.setItem("selectedCharacterId", id);
    window.location.href = "characters.html";  // ← المهم هنا
}


// =========================
// MERCH QTY CONTROL
// =========================
function incrementQty(btn) {
    const num = btn.parentElement.querySelector(".qty-number");
    num.textContent = parseInt(num.textContent) + 1;
}

function decrementQty(btn) {
    const num = btn.parentElement.querySelector(".qty-number");
    const n = parseInt(num.textContent);
    if (n > 1) num.textContent = n - 1;
}


// =========================
// CART COUNTER (NO POPUP)
// =========================
let cartCount = 0;
const cartCountElem = document.getElementById("cart-count");

document.addEventListener("DOMContentLoaded", () => {
    const merchButtons = document.querySelectorAll(".merch-btn");

    merchButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            cartCount++;
            cartCountElem.textContent = cartCount;
        });
    });
});


// =========================
// PAGE LOAD
// =========================
window.onload = function () {
    createParticles();
    displayCharacters();
    generateRandomQuote();
};

