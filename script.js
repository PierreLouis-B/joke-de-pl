// ===========================
// CONFIGURATION
// ===========================
// IMPORTANT: Remplacez 'VOTRE_TOKEN_ICI' par votre token Bearer depuis https://www.blagues-api.fr
const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjk5NjE2NTQ3MDc2OTY0MzY0IiwibGltaXQiOjEwMCwia2V5IjoiTzlzaHRyajRsbjRIRFhUQkUzSm9WQ2txc3FCcnRFYlFwZUtrZDl3N2NITGF1QlZxMFIiLCJjcmVhdGVkX2F0IjoiMjAyNi0wMS0wNVQxNzo0MTowOSswMDowMCIsImlhdCI6MTc2NzYzNDg2OX0.GgPqgj5Pv28rV4CnbVAYXsFVfZINpB-A2NY1nLtiMiw';
const API_URL = 'https://www.blagues-api.fr/api/random';

// Filtres pour exclure certaines catégories (pour garder les blagues appropriées aux meetings)
// Categories disponibles: global, dev, dark, limit, beauf, blondes
const DISALLOWED_CATEGORIES = ['dark', 'limit'];

// ===========================
// STATE MANAGEMENT
// ===========================
let jokeCount = 0;

// ===========================
// DOM ELEMENTS
// ===========================
const jokeButton = document.getElementById('jokeButton');
const jokeText = document.getElementById('jokeText');
const jokeCard = document.getElementById('jokeCard');
const loadingSpinner = document.getElementById('loadingSpinner');
const jokeCountElement = document.getElementById('jokeCount');

// ===========================
// FETCH JOKE FROM API
// ===========================
async function fetchJoke() {
    try {
        // Add loading state
        jokeCard.classList.add('loading');
        jokeButton.disabled = true;
        jokeText.classList.add('fade-out');

        // Check if token is configured
        if (API_TOKEN === 'VOTRE_TOKEN_ICI') {
            throw new Error('Token non configuré. Veuillez ajouter votre token Bearer dans script.js');
        }

        // Build URL with filters
        const filterParams = DISALLOWED_CATEGORIES.map(cat => `disallow=${cat}`).join('&');
        const url = `${API_URL}${filterParams ? '?' + filterParams : ''}`;

        // Fetch joke from Blagues-API
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Token invalide. Vérifiez votre token Bearer.');
            }
            throw new Error(`Erreur API: ${response.status}`);
        }

        const data = await response.json();

        // Ensure minimum loading time for smooth UX (500ms)
        await new Promise(resolve => setTimeout(resolve, 500));

        // Format joke text
        let jokeFullText;
        if (data.answer) {
            // Si la blague a une réponse (format question/réponse)
            jokeFullText = `${data.joke}\n\n${data.answer}`;
        } else {
            // Si c'est une blague simple
            jokeFullText = data.joke;
        }

        // Update joke text with animation
        setTimeout(() => {
            jokeText.textContent = jokeFullText;
            jokeText.classList.remove('fade-out');
            jokeText.classList.add('fade-in');

            // Remove fade-in class after animation
            setTimeout(() => {
                jokeText.classList.remove('fade-in');
            }, 500);
        }, 300);

        // Update counter
        jokeCount++;
        updateCounter();

        // Remove loading state
        jokeCard.classList.remove('loading');
        jokeButton.disabled = false;

    } catch (error) {
        console.error('Error fetching joke:', error);

        // Show error message
        let errorMessage = "Oups ! Impossible de charger la blague.";

        if (error.message.includes('Token')) {
            errorMessage = "⚙️ Configuration requise : Ajoutez votre token Bearer dans script.js (ligne 6).\n\nObtenez votre token gratuit sur blagues-api.fr";
        } else if (error.message.includes('Failed to fetch')) {
            errorMessage = "Pas de connexion internet. Vérifiez votre connexion et réessayez.";
        } else {
            errorMessage = `Erreur : ${error.message}`;
        }

        jokeText.textContent = errorMessage;
        jokeText.classList.remove('fade-out');

        // Remove loading state
        jokeCard.classList.remove('loading');
        jokeButton.disabled = false;
    }
}

// ===========================
// UPDATE COUNTER FUNCTION
// ===========================
function updateCounter() {
    jokeCountElement.textContent = jokeCount;

    // Add animation to counter
    jokeCountElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        jokeCountElement.style.transform = 'scale(1)';
    }, 200);
}

// ===========================
// EVENT LISTENERS
// ===========================
jokeButton.addEventListener('click', fetchJoke);

// Add keyboard shortcut (Space or Enter to get new joke)
document.addEventListener('keydown', (event) => {
    if ((event.code === 'Space' || event.code === 'Enter') && !jokeButton.disabled) {
        event.preventDefault();
        fetchJoke();
    }
});

// ===========================
// INITIALIZE
// ===========================
// Add smooth transition to counter
jokeCountElement.style.transition = 'transform 0.2s ease';
