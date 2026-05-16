const containerDiv = document.querySelector('.container');

// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  div.className = "grid-item";

  div.addEventListener('mouseover', (e) => {
    e.target.classList.add('my-colour-class');
  });

  containerDiv.appendChild(div);
}
  // Permanent hover effect


