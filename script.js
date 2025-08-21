// script.js

// Mouse Follow Image Effect
const projectImages = document.querySelectorAll('.project-image');
const mouseFollowImage = document.getElementById('mouse-follow-image');
const mouseFollowImageImg = mouseFollowImage.querySelector('img');

projectImages.forEach(img => {
    img.addEventListener('mouseover', (e) => {
        mouseFollowImage.style.display = 'block';
        mouseFollowImageImg.src = img.src; // set the image source to the hovered image
    });

    img.addEventListener('mousemove', (e) => {
      mouseFollowImage.style.left = `${e.clientX + 10}px`;
      mouseFollowImage.style.top = `${e.clientY + 10}px`;
    });

    img.addEventListener('mouseout', () => {
        mouseFollowImage.style.display = 'none';
    });
});

