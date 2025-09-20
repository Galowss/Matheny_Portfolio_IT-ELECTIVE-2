window.onload = function() {
    alert("Welcome to Sarah's profile page!");
};

// Function to change message text and color
function changeMessage() {
    var messageElement = document.getElementById("message");
    var colors = ["red", "blue", "green", "purple", "orange"];
    var messages = [
        "Thanks for clicking!",
        "Hope you like my page!",
        "I'm learning to code!",
        "This is fun!",
        "Welcome to my page!"
    ];
    
    // Pick random color and message
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Change the text and color
    messageElement.textContent = randomMessage;
    messageElement.style.color = randomColor;
} 
// Add click event to button when page loads
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("changeBtn");
    button.addEventListener("click", changeMessage);
});

// Simple function to show current time when clicking profile picture
function showTime() {
    var now = new Date();
    var timeString = now.toLocaleTimeString();
    alert("Current time: " + timeString);
}

// Add click event to profile picture
document.addEventListener("DOMContentLoaded", function() {
    var profilePic = document.querySelector(".profile-pic");
    profilePic.addEventListener("click", showTime);
});z