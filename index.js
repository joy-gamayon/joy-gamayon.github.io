const image = document.getElementById('block-image');
const paragraphs = document.getElementById('graph1');

// Show paragraphs on hover
block-image.addEventListener('mouseenter', () => {
  graph1.style.display = 'block';
});

// Hide paragraphs when mouse leaves
block-image.addEventListener('mouseleave', () => {
  graph1.style.display = 'none';
});