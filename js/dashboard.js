if (!localStorage.getItem("loggedIn")) {
  window.location.href = "login.html";
}

const user = JSON.parse(localStorage.getItem("user"));

const userDataDiv = document.getElementById("userData");

userDataDiv.innerHTML = `
  <p><b>Name:</b> ${user.name}</p>
  <p><b>Age:</b> ${user.age}</p>
  <p><b>Phone:</b> ${user.phone}</p>
  <p><b>Email:</b> ${user.email}</p>
  <p><b>Address:</b> ${user.address}</p>
  <p><b>Pincode:</b> ${user.pincode}</p>
`;

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
});
