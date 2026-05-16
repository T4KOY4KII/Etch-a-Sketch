const containerDiv = document.querySelector('.container');

// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  div.className = "grid-item";
  containerDiv.appendChild(div);

  div.addEventListener('mouseover', (e) => {
    e.target.classList.add('my-colour-class');
  });
}
  // Permanent hover effect


