const containerDiv = document.querySelector('.container');

// Add 16 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  div.className = "grid-item";

  div.addEventListener('mouseover', (e) => {
    e.target.classList.add('my-colour-class');
  });

  // Permanent hover effect
  containerDiv.appendChild(div);
}

const gridBtn = document.querySelector('button');
gridBtn.addEventListener('click', (e) => {

});



