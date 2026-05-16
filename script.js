const containerDiv = document.querySelector('.container');

// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  containerDiv.appendChild(div).className = "grid-item";

  
}

// Permanent hover effect
div.addEventListener('mouseover', 
    e => e.target.classList.add('my-colour-class')
)