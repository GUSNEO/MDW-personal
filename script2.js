var today = new Date().getFullYear();
var todayAgeNumber = parseInt(today);
const yearOfBirthSelect = document.getElementById("yearOfBirth");

const FillEmail1 = () => {
  const userInput = document.getElementById("input-email");
  const clickableText = document.getElementById("clickableText");
  let hasAddedEmail = false;

  clickableText.addEventListener("click", () => {
    if (!hasAddedEmail) {
      userInput.value += clickableText.textContent;
      hasAddedEmail = true;
    }
  });
};

const FillEmail2 = () => {
  const userInput = document.getElementById("input-email");
  const clickableText = document.getElementById("clickableText2");
  let hasAddedEmail = false;

  clickableText.addEventListener("click", () => {
    if (!hasAddedEmail) {
      userInput.value += clickableText.textContent;
      hasAddedEmail = true;
    }
  });
};

const Password = () => {
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#password");

  togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
  });

  // prevent form submit
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
};

function createOptionsYear() {
  console.log(yearOfBirthSelect.value);
  for (let i = 0; i < 100; i++) {
    var optionYear = document.createElement("option");
    optionYear.textContent = todayAgeNumber - i;
    yearOfBirthSelect.appendChild(optionYear);
  }
}

const checkRange = () => {
  selectedYear = yearOfBirthSelect.value
  console.log(selectedYear)
  const ageVerificationSpan = document.getElementById("ageVerification");
  const submitButton = document.getElementById("submitButton")
  const calculatedYear = todayAgeNumber - selectedYear;
  console.log(calculatedYear)

  if (calculatedYear >= 18) {
    ageVerificationSpan.textContent = "✅";
    ageVerificationSpan.style.color = "green";
    submitButton.disabled = false;
  } else {
    ageVerificationSpan.textContent = "❌";
    ageVerificationSpan.style.color = "red";
    submitButton.disabled = true;
  }
};

const buttonTest = () => {
  console.log("apertou")
}

const passwordVerify = () => {

  const thePassword = document.getElementById("password").value
  const theNewPassword = document.getElementById("confirmar-senha").value

  console.log(thePassword)
  console.log(theNewPassword)

  if (thePassword == theNewPassword) {
    alert('verificação correta')
  }
  else {
    alert('as senhas estão diferentes')
  }
}

createOptionsYear();
checkRange();
