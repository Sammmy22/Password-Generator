const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!$%&|[](){}:;.,*+-#@<>~",
};

const l_slider = document.querySelector("#lowercase");

const u_slider = document.querySelector("#uppercase");

const n_slider = document.querySelector("#nums");

const s_slider = document.querySelector("#symbols");

const gen_password = document.querySelector("#generated");

l_slider.addEventListener("change", function () {
  document.querySelector("#l_num").innerHTML = this.value;
});
u_slider.addEventListener("change", function () {
  document.querySelector("#u_num").innerHTML = this.value;
});
n_slider.addEventListener("change", function () {
  document.querySelector("#num").innerHTML = this.value;
});
s_slider.addEventListener("change", function () {
  document.querySelector("#syms").innerHTML = this.value;
});

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}

document.querySelector("#get").addEventListener("click", function () {
  let password = [];
  for (let i = 0; i < l_slider.value; i++) {
    password.push(
      characters.lowercase[
        Math.floor(Math.random() * characters.lowercase.length)
      ]
    );
  }
  for (let i = 0; i < u_slider.value; i++) {
    password.push(
      characters.uppercase[
        Math.floor(Math.random() * characters.uppercase.length)
      ]
    );
  }
  for (let i = 0; i < n_slider.value; i++) {
    password.push(
      characters.numbers[Math.floor(Math.random() * characters.numbers.length)]
    );
  }
  for (let i = 0; i < s_slider.value; i++) {
    password.push(
      characters.symbols[Math.floor(Math.random() * characters.symbols.length)]
    );
  }
  let shuffledPassword = shuffle(password);
  let passwordStr = "";

  for (let i = 0; i < shuffledPassword.length; i++) {
    passwordStr += shuffledPassword[i];
  }

  gen_password.value = passwordStr;

  document.querySelector("#pass-length").innerHTML = passwordStr.length;
});

document.querySelector("#copy").addEventListener("click", function () {
  navigator.clipboard.writeText(gen_password.value);
  alert("Password copied to clipboard!");
});
