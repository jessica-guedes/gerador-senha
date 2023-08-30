let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%&*"
};

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generationPassword() {
  let pass = "";
  let selectedCharsets = "";

  let includeUppercase = document.querySelector('#uppercase').checked;
  let includeLowercase = document.querySelector('#lowercase').checked;
  let includeNumbers = document.querySelector('#numbers').checked;
  let includeSymbols = document.querySelector('#symbols').checked;

  if (includeUppercase) {
    selectedCharsets += charset.uppercase;
  }
  if (includeLowercase) {
    selectedCharsets += charset.lowercase;
  }
  if (includeNumbers) {
    selectedCharsets += charset.numbers;
  }
  if (includeSymbols) {
    selectedCharsets += charset.symbols;
  }

  if (selectedCharsets.length === 0) {
    alert("Please select at least one character set.");
    return;
  }

  let n = selectedCharsets.length;

  for (let i = 0; i < sliderElement.value; ++i) {
    pass += selectedCharsets.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword() {
  if (novaSenha) {
    navigator.clipboard.writeText(novaSenha)
      .then(() => {
        alert("Password copied successfully!");
      })
      .catch((error) => {
        alert("Error copying password: " + error);
      });
  } else {
    alert("Generate a password first.");
  }
}

