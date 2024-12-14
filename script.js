// script.js

// Function to navigate between pages
function navigateToPage(pageId, workout = null) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden');
    });

    // Show the target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }

    // If the target page is the workout guide page, update the content
    if (pageId === 'guide-page' && workout) {
        updateWorkoutGuide(workout);
    }
}

// Function to go back to the previous page
function navigateBack() {
    const currentPage = document.querySelector('.page:not(.hidden)');
    if (currentPage) {
        let parentPage = currentPage.previousElementSibling;
        while (parentPage && !parentPage.classList.contains('page')) {
            parentPage = parentPage.previousElementSibling;
        }
        if (parentPage) {
            parentPage.classList.remove('hidden');
            currentPage.classList.add('hidden');
        }
    }
}

// Function to update the workout guide content based on the selected workout
function updateWorkoutGuide(workout) {
    const title = document.getElementById('workout-title');
    const image = document.getElementById('workout-image');
    const description = document.getElementById('workout-description');

    if (workout === 'push-ups') {
        title.textContent = 'Push-ups';
        image.src = 'push-ups.jpg'; // Replace with actual image path
        description.textContent = 'Push-ups are great for building upper body strength. Perform 3 sets of 15 reps.';
    } else if (workout === 'squats') {
        title.textContent = 'Squats';
        image.src = 'squats.jpg'; // Replace with actual image path
        description.textContent = 'Squats help strengthen your legs and core. Do 3 sets of 20 reps.';
    } else if (workout === 'plank') {
        title.textContent = 'Plank';
        image.src = 'plank.jpg'; // Replace with actual image path
        description.textContent = 'Planks are excellent for core stability. Hold for 30-60 seconds.';
    }
}

// Function to navigate to the home page
function navigateToHome() {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden');
    });

    // Show the opening page
    const openingPage = document.getElementById('opening-page');
    if (openingPage) {
        openingPage.classList.remove('hidden');
    }
}

// Event listeners for gender selection buttons
const genderButtons = document.querySelectorAll('.gender-button');
genderButtons.forEach(button => {
    button.addEventListener('click', () => {
        navigateToPage('level-page');
    });
});

// Event listeners for fitness level selection buttons
const levelButtons = document.querySelectorAll('.level-button');
levelButtons.forEach(button => {
    button.addEventListener('click', () => {
        navigateToPage('workouts-page');
    });
});

// Event listeners for workout selection buttons
const workoutButtons = document.querySelectorAll('.workout-button');
workoutButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const workout = event.target.textContent.toLowerCase(); // Get workout name (e.g., "Push-ups")
        navigateToPage('guide-page', workout);
    });
});
