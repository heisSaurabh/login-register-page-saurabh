if (!localStorage.getItem("loggedIn")) {
  window.location.href = "login.html";
}

const userData = JSON.parse(localStorage.getItem("user"));

const viewSection = document.getElementById("viewSection");
const editSection = document.getElementById("editSection");

const nameView = document.getElementById("nameView");
const ageView = document.getElementById("ageView");
const phoneView = document.getElementById("phoneView");
const emailView = document.getElementById("emailView");
const addressView = document.getElementById("addressView");
const pincodeView = document.getElementById("pincodeView");

const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const phoneInput = document.getElementById("phoneInput");
const emailInput = document.getElementById("emailInput");
const addressInput = document.getElementById("addressInput");
const pincodeInput = document.getElementById("pincodeInput");

function renderProfile() {
  nameView.textContent = userData.name;
  ageView.textContent = userData.age;
  phoneView.textContent = userData.phone;
  emailView.textContent = userData.email;
  addressView.textContent = userData.address;
  pincodeView.textContent = userData.pincode;
}

renderProfile();

document.getElementById("editProfileBtn").addEventListener("click", () => {
  viewSection.style.display = "none";
  editSection.style.display = "block";

  nameInput.value = userData.name;
  ageInput.value = userData.age;
  phoneInput.value = userData.phone;
  emailInput.value = userData.email;
  addressInput.value = userData.address;
  pincodeInput.value = userData.pincode;
});

document.getElementById("saveProfileBtn").addEventListener("click", () => {
  userData.name = nameInput.value.trim();
  userData.age = ageInput.value.trim();
  userData.phone = phoneInput.value.trim();
  userData.email = emailInput.value.trim();
  userData.address = addressInput.value.trim();
  userData.pincode = pincodeInput.value.trim();

  localStorage.setItem("user", JSON.stringify(userData));

  editSection.style.display = "none";
  viewSection.style.display = "block";
  renderProfile();
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
});

const passwordModal = document.getElementById("passwordModal");

document.getElementById("changePasswordBtn").addEventListener("click", () => {
  passwordModal.style.display = "flex";
});

document.getElementById("cancelPasswordBtn").addEventListener("click", () => {
  passwordModal.style.display = "none";
  document.getElementById("passwordError").textContent = "";
});

document.getElementById("updatePasswordBtn").addEventListener("click", () => {
  const newPass = document.getElementById("newPassword").value;
  const confirmPass = document.getElementById("confirmPassword").value;
  const confirmed = document.getElementById("confirmChange").checked;
  const errorBox = document.getElementById("passwordError");

  if (!confirmed) {
    errorBox.textContent = "Please confirm the password change";
    return;
  }

  if (newPass !== confirmPass) {
    errorBox.textContent = "Passwords do not match";
    return;
  }

  userData.password = newPass;
  localStorage.setItem("user", JSON.stringify(userData));
  passwordModal.style.display = "none";
  errorBox.textContent = "";
});
