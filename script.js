// Wait for the entire page to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Select all elements with the class 'grid-item'
    const gridItems = document.querySelectorAll('.grid-item');

    // Loop through each grid item
    gridItems.forEach((item, index) => {
        // Use setTimeout to add the 'visible' class after a delay.
        // The delay increases for each item (index * 150ms), creating a stagger effect.
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 150); 
    });

});