document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');

  projects.forEach(project => {
    const buttons = project.querySelectorAll('.button-container button');

    project.addEventListener('mouseover', () => {
      buttons.forEach(button => {
        button.style.backgroundColor = '#44c8da33';
        button.style.color = '#EBFDFF';
        button.style.border = '2px solid #EBFDFF';
        button.style.transition = 'transform 0.5s ease-in-out';
        button.style.animation = 'wiggle 0.3s linear infinite alternate';
      });
    });

    project.addEventListener('mouseout', () => {
      buttons.forEach(button => {
        button.style.backgroundColor = '#031417';
        button.style.color = '#EBFDFF';
        button.style.border = '2px solid #EBFDFF';
        button.style.transform = 'rotate(0deg)';
        button.style.animation = 'none';
      });
    });
  });
});