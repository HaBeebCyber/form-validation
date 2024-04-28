document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");
    if (username === storedUsername && password === storedPassword) {
      alert("Login successful!");
      window.location.href = "dash.html";
    } else {
      alert("Invalid username or password!");
    }
  });
  