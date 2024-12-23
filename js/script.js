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
    // const description = document.getElementById('workout-description').innerHTML;

    if (workout === 'push-ups') {
        title.textContent = 'Push-ups';
        image.src = selectedGender == 'male'? '../Images/pushup.gif' : '../Images/pushup_women.gif'; // Replace with actual image path
        let text = `<div  style="line-height: 2.8;">
        1. Builds Strength and Muscle Tone: Targets chest, shoulders, triceps, and core, enhancing upper body strength and definition.<br>
        2. Improves Core Stability: Engages abdominal muscles, supporting better posture and balance.<br>
        3. Boosts Cardiovascular Health: When done in higher reps, it raises heart rate, improving endurance and heart health.<br>   Perform 3 sets of 15 reps.</div>`;
        document.getElementById('workout-description').innerHTML = text
    } else if (workout === 'squats') {
        title.textContent = 'Squats';
        image.src = selectedGender == 'male'? '../Images/squat.gif' : '../Images/squat_women.gif'; // Replace with actual image path
        text = `<div  style="line-height: 2.8;">
        1. Strengthens Multiple Muscle Groups: Squats target the legs, glutes, and core, improving overall lower body strength and stability.<br>
        2. Enhances Functional Fitness: Mimics natural movements like sitting and standing, boosting mobility and balance in daily activities.<br>
        3. Promotes Fat Loss: Engages large muscle groups, increasing calorie burn and boosting metabolism effectively.<br>   Do 3 sets of 20 reps.</div> `;
        document.getElementById('workout-description').innerHTML = text
    } else if (workout === 'plank') {
        title.textContent = 'Plank';
        image.src = selectedGender == 'male'? '../Images/plank.gif' : '../Images/plank_women.gif'; // Replace with actual image path
        text = `<div  style="line-height: 2.8;">
        1. Core Strength: Planks engage multiple muscle groups, improving core stability and strength, which supports better posture and reduces back pain.<br>
        2. Full-Body Engagement: They activate muscles in the arms, shoulders, chest, back, and legs, offering a comprehensive workout.<br>
        3. Improved Balance and Stability: Regular planking enhances balance and coordination by strengthening stabilizer muscles.<br>   Hold for 30-60 seconds.</div>`;
        document.getElementById('workout-description').innerHTML = text
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
let selectedGender = '';
genderButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedGender = button.getAttribute('data-gender')
        navigateToPage('level-page');
        console.log('Selected Gender:', selectedGender);
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
