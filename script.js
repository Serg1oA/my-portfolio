// script.js

document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');

  projects.forEach(project => {
    const buttons = project.querySelectorAll('.button-container button');

    project.addEventListener('mouseover', () => {
      buttons.forEach(button => {
        button.style.backgroundColor = '#333'; // Dark
        button.style.color = '#fff';
        button.style.border = '2px solid #fff';
        button.style.transition = 'transform 0.5s ease-in-out'; // Add transition for rotation

        // Apply wiggle animation
        button.style.animation = 'wiggle 0.3s linear infinite alternate';
      });
    });

    project.addEventListener('mouseout', () => {
      buttons.forEach(button => {
        button.style.backgroundColor = '#fff'; // White background
        button.style.color = '#333'; // Dark text
        button.style.border = '2px solid #333'; /* Subtle border */
        button.style.transform = 'rotate(0deg)'; // Reset rotation
        button.style.animation = 'none'; // Remove wiggle animation
      });
    });
  });
});