document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = {
    name: document.getElementById("name").value.trim(),
    age: document.getElementById("age").value,
    phone: document.getElementById("phone").value.trim(),
    email: document.getElementById("email").value.trim(),
    address: document.getElementById("address").value.trim(),
    pincode: document.getElementById("pincode").value,
    password: document.getElementById("password").value
  };

  if (!user.name || !user.email || !user.password) {
    document.getElementById("error").innerText = "Name, Email & Password are required";
    return;
  }

  if (localStorage.getItem("user")) {
    document.getElementById("error").innerText = "User already registered";
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));

  window.location.href = `login.html?email=${user.email}&phone=${user.phone}`;
});
