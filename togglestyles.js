// toggleStyles.js

// Function to toggle between two stylesheets
function toggleStyles() {
    // Get the existing link elements in the head
    var style1 = document.getElementById('style1');
    var style2 = document.getElementById('style2');

    // Check if style1 is currently applied
    if (style1.disabled || !style1.href) {
        // Enable style1 and disable style2
        style1.disabled = false;
        style2.disabled = true;
    } else {
        // Enable style2 and disable style1
        style1.disabled = true;
        style2.disabled = false;
    }
}

// Attach the toggleStyles function to an event (e.g., button click)
document.getElementById('toggleButton').addEventListener('click', toggleStyles);
