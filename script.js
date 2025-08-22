document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');

  projects.forEach(project => {
    const buttons = project.querySelectorAll('.button-container button');

    project.addEventListener('mouseover', () => {
      buttons.forEach(button => {
        button.style.backgroundColor = '#333';
        button.style.color = '#f6f4f1';
        button.style.border = '2px solid #f6f4f1';
        button.style.transition = 'transform 0.5s ease-in-out';
        button.style.animation = 'wiggle 0.3s linear infinite alternate';
      });
    });

    project.addEventListener('mouseout', () => {
      buttons.forEach(button => {
        button.style.backgroundColor = '#f6f4f1';
        button.style.color = '#333';
        button.style.border = '2px solid #333';
        button.style.transform = 'rotate(0deg)';
        button.style.animation = 'none';
      });
    });
  });
});