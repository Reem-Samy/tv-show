 const characters = [
        {
            id: 1,
            name: "Elena Gilbert",
            actor: "Nina Dobrev",
            role: "The Doppelgänger",
            emoji: "imgs/ElenaGilbert.png",
            bio: "Elena Gilbert is a compassionate high school student whose life is forever changed when she falls for Stefan Salvatore. As a Petrova doppelgänger, she becomes the center of supernatural conflicts spanning centuries. Her journey from an ordinary girl to a brave protector showcases her resilience, love, and sacrifice."
        },
        {
            id: 2,
            name: "Stefan Salvatore",
            actor: "Paul Wesley",
            role: "The Brooding Vampire",
            emoji: "imgs/StefanSalvatore.png",
            bio: "Stefan Salvatore is a 162-year-old vampire struggling with his dark past and addiction to human blood. Known as the 'good brother,' his love for Elena drives him to maintain his humanity. Beneath his compassionate exterior lies 'The Ripper,' a bloodthirsty persona that haunts his immortal existence."
        },
        {
            id: 3,
            name: "Damon Salvatore",
            actor: "Ian Somerhalder",
            role: "The Charming Devil",
            emoji: "imgs/DamonSalvatore.png",
            bio: "Damon Salvatore embodies the darker side of vampirism with his sarcastic wit and reckless abandon. Initially the antagonist, his complex character evolves as he falls for Elena, revealing vulnerability beneath his tough exterior. His transformation from villain to hero is one of the series' most compelling arcs."
        },
        {
            id: 4,
            name: "Bonnie Bennett",
            actor: "Kat Graham",
            role: "The Powerful Witch",
            emoji: "imgs/bonniebennett.png",
            bio: "Bonnie Bennett discovers she comes from a powerful line of witches and becomes one of the most formidable supernatural beings in Mystic Falls. Her unwavering loyalty to her friends leads her to make countless sacrifices, often at great personal cost, making her the heart of the group."
        },
        {
            id: 5,
            name: "Caroline Forbes",
            actor: "Candice King",
            role: "The Vampire Queen",
            emoji: "imgs/CarolineForbes.png",
            bio: "Caroline Forbes transforms from an insecure teenager into one of the strongest vampires in the series. Her transition amplifies her natural determination and compassion, proving that vampirism doesn't mean losing one's humanity. She becomes a fierce protector and loyal friend."
        },
        {
            id: 6,
            name: "Tyler Lockwood",
            actor: "Michael Trevino",
            role: "The Hybrid",
            emoji: "imgs/TylerLockwood.png",
            bio: "Tyler Lockwood's life changes when he triggers his werewolf curse, forcing him to endure painful transformations each full moon. His journey from an angry, privileged teenager to a mature werewolf-vampire hybrid explores themes of identity, control, and redemption."
        }
    ];

    const quotes = [
        { text: "I'm not a hero, Elena. I don't do good. It's not in me.", author: "Damon Salvatore" },
        { text: "The only way to get things back to the way they were is to do things that have never been done before.", author: "Stefan Salvatore" },
        { text: "I will always choose you.", author: "Elena Gilbert" },
        { text: "Life sucks either way, Jeremy. At least if you're a vampire, you don't have to feel bad about it.", author: "Damon Salvatore" },
        { text: "When you lose someone, it stays with you. Always reminding you of how easy it is to get hurt.", author: "Stefan Salvatore" },
        { text: "I'm Klaus. The original hybrid, and the big bad wolf.", author: "Klaus Mikaelson" },
        { text: "Our life is one big proverbial coin toss.", author: "Stefan Salvatore" },
        { text: "Death happens. We come, we go. The sooner she dies, the better.", author: "Damon Salvatore" },
        { text: "I think you can either be friends with someone or in love with them. I don't think you can be both.", author: "Elena Gilbert" },
        { text: "The truth is, I've tried to stop thinking about you. And I can't.", author: "Stefan Salvatore" }
    ];

        function createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function generateRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        
        const quoteText = document.getElementById('quote-text');
        const quoteAuthor = document.getElementById('quote-author');
        
        quoteText.style.opacity = '0';
        quoteAuthor.style.opacity = '0';
        
        setTimeout(() => {
            quoteText.textContent = randomQuote.text;
            quoteAuthor.textContent = `— ${randomQuote.author}`;
            
            quoteText.style.transition = 'opacity 0.5s';
            quoteAuthor.style.transition = 'opacity 0.5s';
            quoteText.style.opacity = '1';
            quoteAuthor.style.opacity = '1';
        }, 300);
    }

    function displayCharacters() {
        const grid = document.getElementById('characters-grid');
        
        characters.forEach(character => {
            const card = document.createElement('div');
            card.className = 'character-card';
            card.onclick = () => goToCharacterPage(character.id);
            
card.innerHTML = `
    <div class="character-img">
        <img src="${character.emoji}" alt="${character.name}">
    </div>
    <div class="character-info">
        <h3 class="character-name">${character.name}</h3>
        <p class="character-role">${character.role}</p>
        <p class="character-actor">Portrayed by ${character.actor}</p>
    </div>
`;

            
            grid.appendChild(card);
        });
    }

    function goToCharacterPage(characterId) {
        sessionStorage.setItem('selectedCharacterId', characterId);
        window.location.href = 'character.html';
    }

    window.onload = function() {
        createParticles();
        displayCharacters();
        generateRandomQuote();
    };


    function incrementQty(btn) {
    const qtySpan = btn.parentElement.querySelector('.qty-number');
    let currentQty = parseInt(qtySpan.textContent);
    qtySpan.textContent = currentQty + 1;
}

function decrementQty(btn) {
    const qtySpan = btn.parentElement.querySelector('.qty-number');
    let currentQty = parseInt(qtySpan.textContent);
    if (currentQty > 1) qtySpan.textContent = currentQty - 1;
}

function addToCart(btn) {
    const qty = btn.parentElement.querySelector('.qty-number').textContent;
    const title = btn.parentElement.querySelector('.merch-title').textContent;
    alert(`${qty} × ${title} added to cart!`);
}
