// Progress Bar
window.addEventListener('scroll', updateProgressBar);

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {  // Check if the progressBar exists before manipulating it
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercentage + "%"; // Update progress bar width
    }
}

// Project Item Hover Effects
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(item => {
    const card = item.querySelector('.project-card');

    item.addEventListener('mouseenter', () => {
        card.style.opacity = '1'; 
        card.style.pointerEvents = 'auto'; 
    });

    item.addEventListener('mouseleave', () => {
        card.style.opacity = '0'; 
        card.style.pointerEvents = 'none'; 
    });
});

