document.addEventListener("DOMContentLoaded", function() {
    var username = localStorage.getItem("username");
    document.getElementById("welcome-user").textContent = username;
  });
  