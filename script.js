document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript loaded!");
    
    const starsContainer = document.querySelector('.stars');
    const numStars = Math.floor(window.innerWidth * window.innerHeight / 5000);

    // Generate stars dynamically
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDelay = `${Math.random() * 10}s`;
        starsContainer.appendChild(star);
    }
    console.log(numStars)

    // Create a meteor
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    starsContainer.appendChild(meteor);
});
