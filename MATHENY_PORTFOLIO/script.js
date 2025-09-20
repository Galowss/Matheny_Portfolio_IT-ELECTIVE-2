window.onload = function() {
  alert("Welcome to my portfolio page!");
};

function changeColor() {
  const nameElement = document.getElementById("name");
  const colors = ["#e63946", "#457b9d", "#2a9d8f", "#f4a261", "#ff7f50", "#6a4c93"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  nameElement.style.color = randomColor;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

document.querySelector(".profile-pic").addEventListener("click", function() {
  this.style.animation = "none";
  this.offsetHeight; 
  this.style.animation = "swirl 1s ease-out";
});
