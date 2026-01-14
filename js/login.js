const params = new URLSearchParams(window.location.search);
document.getElementById("identifier").value =
  params.get("email") || params.get("phone") || "";

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const identifier = document.getElementById("identifier").value.trim();
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    document.getElementById("error").innerText = "No user found. Please register.";
    return;
  }

  if (
    (identifier === user.email || identifier === user.phone) &&
    password === user.password
  ) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid credentials";
  }
});
