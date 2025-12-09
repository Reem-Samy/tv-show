 const characters = [
            {
                id: 1,
                name: "Elena Gilbert",
                actor: "Nina Dobrev",
                role: "The Doppelgänger",
                emoji: "imgs/ElenaGilbert.png",
                bio: "Elena Gilbert is a compassionate high school student whose life is forever changed when she falls for Stefan Salvatore. As a Petrova doppelgänger, she becomes the center of supernatural conflicts spanning centuries. Her journey from an ordinary girl to a brave protector showcases her resilience, love, and sacrifice. Despite the darkness surrounding her, Elena maintains her humanity and fights to protect those she loves, even when it means making impossible choices.",
                species: "Human/Doppelgänger",
                status: "Alive",
                firstAppearance: "Season 1, Episode 1",
                traits: ["Compassionate", "Brave", "Loyal", "Selfless", "Strong-willed", "Protective"]
            },
            {
                id: 2,
                name: "Stefan Salvatore",
                actor: "Paul Wesley",
                role: "The Brooding Vampire",
                emoji: "imgs/StefanSalvatore.png",
                bio: "Stefan Salvatore is a 162-year-old vampire struggling with his dark past and addiction to human blood. Known as the 'good brother,' his love for Elena drives him to maintain his humanity. Beneath his compassionate exterior lies 'The Ripper,' a bloodthirsty persona that haunts his immortal existence. Stefan's constant battle between his monstrous nature and desire to be good makes him one of the most complex characters in Mystic Falls.",
                species: "Vampire",
                status: "Undead",
                firstAppearance: "Season 1, Episode 1",
                traits: ["Noble", "Tortured", "Loyal", "Self-controlled", "Romantic", "Heroic"]
            },
            {
                id: 3,
                name: "Damon Salvatore",
                actor: "Ian Somerhalder",
                role: "The Charming Devil",
                emoji: "imgs/DamonSalvatore.png",
                bio: "Damon Salvatore embodies the darker side of vampirism with his sarcastic wit and reckless abandon. Initially the antagonist, his complex character evolves as he falls for Elena, revealing vulnerability beneath his tough exterior. His transformation from villain to hero is one of the series' most compelling arcs. Damon proves that even centuries-old vampires can change when they find something worth fighting for.",
                species: "Vampire",
                status: "Undead",
                firstAppearance: "Season 1, Episode 1",
                traits: ["Sarcastic", "Charismatic", "Impulsive", "Complex", "Protective", "Witty"]
            },
            {
                id: 4,
                name: "Bonnie Bennett",
                actor: "Kat Graham",
                role: "The Powerful Witch",
                emoji: "imgs/bonniebennett.png",
                bio: "Bonnie Bennett discovers she comes from a powerful line of witches and becomes one of the most formidable supernatural beings in Mystic Falls. Her unwavering loyalty to her friends leads her to make countless sacrifices, often at great personal cost, making her the heart of the group. As a Bennett witch, she carries the weight of her family's legacy and channels incredible power to protect those she loves.",
                species: "Witch",
                status: "Alive",
                firstAppearance: "Season 1, Episode 1",
                traits: ["Powerful", "Selfless", "Determined", "Loyal", "Spiritual", "Brave"]
            },
            {
                id: 5,
                name: "Caroline Forbes",
                actor: "Candice King",
                role: "The Vampire Queen",
                emoji: "imgs/CarolineForbes.png",
                bio: "Caroline Forbes transforms from an insecure teenager into one of the strongest vampires in the series. Her transition amplifies her natural determination and compassion, proving that vampirism doesn't mean losing one's humanity. She becomes a fierce protector and loyal friend, using her perfectionism and organization skills to excel in her new supernatural life. Caroline's journey shows that true strength comes from embracing who you are.",
                species: "Vampire",
                status: "Undead",
                firstAppearance: "Season 1, Episode 1",
                traits: ["Confident", "Organized", "Caring", "Strong", "Loyal", "Perfectionist"]
            },
            {
                id: 6,
                name: "Tyler Lockwood",
                actor: "Michael Trevino",
                role: "The Hybrid",
                emoji: "imgs/TylerLockwood.png",
                bio: "Tyler Lockwood's life changes when he triggers his werewolf curse, forcing him to endure painful transformations each full moon. His journey from an angry, privileged teenager to a mature werewolf-vampire hybrid explores themes of identity, control, and redemption. Tyler learns that being supernatural doesn't define him – his choices do. His story arc demonstrates growth, sacrifice, and the struggle to find one's place in a world of monsters.",
                species: "Werewolf/Hybrid",
                status: "Werewolf",
                firstAppearance: "Season 1, Episode 1",
                traits: ["Hot-tempered", "Loyal", "Protective", "Struggling", "Evolving", "Strong"]
            }
        ];

        // ===== CREATE FLOATING PARTICLES =====
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

        // ===== LOAD CHARACTER PROFILE =====
        function loadCharacterProfile() {
            // Get character ID from sessionStorage
            const characterId = sessionStorage.getItem('selectedCharacterId');
            
            // Get content container
            const contentDiv = document.getElementById('character-content');
            
            // Check if ID exists
            if (!characterId) {
                displayError('No Character Selected', 'Please select a character from the home page to view their profile.');
                return;
            }
            
            // Find character in array
            const character = characters.find(c => c.id === parseInt(characterId));
            
            // Check if character exists
            if (!character) {
                displayError('Character Not Found', 'The requested character profile could not be found in our archives.');
                return;
            }
            
            // Display character profile
            displayCharacterProfile(character);
        }

        // ===== DISPLAY ERROR STATE =====
        function displayError(title, message) {
            const contentDiv = document.getElementById('character-content');
            contentDiv.innerHTML = `
                <div class="error-container">
                    <div class="error-icon">⚠️</div>
                    <h2 class="error-title">${title}</h2>
                    <p class="error-message">${message}</p>
                    <a href="index.html" class="back-btn">Return to Home</a>
                </div>
            `;
        }

        // ===== DISPLAY CHARACTER PROFILE =====
function displayCharacterProfile(character) {
    const contentDiv = document.getElementById('character-content');
    
    // Create traits HTML
    const traitsHTML = character.traits.map(trait => 
        `<div class="trait-badge">${trait}</div>`
    ).join('');

    // تحقق إذا كان character.emoji يحتوي على مسار صورة
    let characterImageHTML = '';
    if (character.emoji.endsWith('.png') || character.emoji.endsWith('.jpg') || character.emoji.endsWith('.jpeg') || character.emoji.endsWith('.webp')) {
        characterImageHTML = `<img src="${character.emoji}" alt="${character.name}" class="profile-img">`;
    } else {
        characterImageHTML = `<span class="emoji">${character.emoji}</span>`;
    }

    contentDiv.innerHTML = `
        <!-- PROFILE HERO -->
        <section class="profile-hero">
            <div class="profile-hero-content">
                <div class="profile-image-container">
                    <div class="profile-image-wrapper">
                        <div class="profile-image-border"></div>
                        <div class="profile-image">
                            ${characterImageHTML}
                        </div>
                        <div class="profile-ornament ornament-top-left">⚜️</div>
                        <div class="profile-ornament ornament-top-right">⚜️</div>
                        <div class="profile-ornament ornament-bottom-left">⚜️</div>
                        <div class="profile-ornament ornament-bottom-right">⚜️</div>
                    </div>
                </div>
                
                <div class="profile-info">
                    <div class="profile-role">${character.role}</div>
                    <h1 class="profile-name">${character.name}</h1>
                    <p class="profile-actor">Portrayed by <span>${character.actor}</span></p>
                    <div class="profile-divider"></div>
                    
                    <div class="character-stats">
                        <div class="stat-card">
                            <div class="stat-icon"></div>
                            <div class="stat-label">Species</div>
                            <div class="stat-value">${character.species}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon"></div>
                            <div class="stat-label">Status</div>
                            <div class="stat-value">${character.status}</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon"></div>
                            <div class="stat-label">First Seen</div>
                            <div class="stat-value">${character.firstAppearance}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CHARACTER DETAILS -->
        <section class="character-details">
            <div class="details-container">
                <h2 class="section-title">Character Biography</h2>
                <div class="section-divider"></div>
                
                <div class="bio-card">
                    <p class="bio-text">${character.bio}</p>
                </div>
            </div>
        </section>

        <!-- CHARACTER TRAITS -->
        <section class="traits-section">
            <div class="details-container">
                <h2 class="section-title">Character Traits</h2>
                <div class="section-divider"></div>
                
                <div class="traits-grid">
                    ${traitsHTML}
                </div>
            </div>
        </section>
    `;
}


        window.onload = function() {
            createParticles();
            setTimeout(() => {
                loadCharacterProfile();
            }, 800);
        };