const form = document.getElementById("form");
const form_2 = document.getElementById("form-2");
const emailInput = document.getElementById("email-input");
const errorText = document.getElementById("error-text");
const emailInput2 = document.getElementById("email-input-2");
const errorText2 = document.getElementById("error-text-2");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function handleSubmit(event, email, input, errorText) {
  event.preventDefault();

  if (!emailRegex.test(email)) {
    if (input.classList.contains("border-very-dark-blue")) {
      input.classList.add("border-[#EF4877]");
      input.classList.remove("border-very-dark-blue");
    } else {
      input.classList.add("border-[#EF4877]");
      input.classList.add("border");
    }

    errorText.classList.remove("hidden");
    errorText.classList.add("block");
  } else {
    return;
  }
}

function handleFocus(input, errorText) {
  if (input === emailInput) {
    input.classList.remove("border-[#EF4877]");
    input.classList.add("border-very-dark-blue");
  } else {
    input.classList.remove("border-[#EF4877]");
    input.classList.remove("border");
  }

  errorText.classList.remove("block");
  errorText.classList.add("hidden");
}

form.addEventListener("submit", (event) => {
  handleSubmit(event, emailInput.value, emailInput, errorText);
});

form_2.addEventListener("submit", (event) => {
  handleSubmit(event, emailInput2.value, emailInput2, errorText2);
});

emailInput.addEventListener("focus", (event) => {
  handleFocus(emailInput, errorText);
});

emailInput2.addEventListener("focus", (event) => {
  handleFocus(emailInput2, errorText2);
});
