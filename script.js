const containerDiv = document.querySelector('.container');

// Making the initial grid Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  div.className = "grid-item";
  
  // For coloring the grid
  div.addEventListener('mouseover', (e) => {
    e.target.classList.add('my-colour-class');
  });

  // Permanent hover effect
  containerDiv.appendChild(div);
}

// Changing the grid size //
const gridBtn = document.querySelector('button');
gridBtn.addEventListener('click', (e) => {

});



