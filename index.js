/* Regular Expressions which are also known as regex or regexp are patterns used to match character combinations in strings. In JavaScript, regular expressions are objects that can be used for text search and manipulation tasks such as validating input, searching, replacing, and extracting data from strings. */

const pattern = {
  username: /^[a-z\d]{3,20}$/i,
  emailRegExp: /^([a-zA-Z\d.%+-]+)@([a-z\d]{2,8})\.([a-z]{2,3})(\.[a-z]{2,3})?$/,
  passwordRegExp: /^[\w-@\.]{8,}$/,
  telephoneRegExp: /^[0][7-9][0-1][0-9]{8}$/,
  profileSlug: /^[a-z0-9-]{8,20}$/, // this is to ensure the regex matches 8-20 characters
};

const registrationForm = document.querySelector("#registrationForm");

// This is a function to set the validation message
const setValidationMessage = (inputElement, isValid) => {
  const invalidMessage = inputElement.nextElementSibling;
  
  if (isValid) {
    invalidMessage.style.display = "none";
  } else {
    invalidMessage.style.display = "block";
    setTimeout(() => {
      invalidMessage.style.display = "none"; // This hides the message after 2 seconds
    }, 2000);
  }
};

// Handle form submission
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the values of the input fields
  const username = document.querySelector("#username").value;
  const emailAddress = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const phoneNumber = document.querySelector("#telephone").value;
  const profileSlug = document.querySelector("#profile_slug").value;
  
  let isTheFormValid = true;
  
  // Hides all validation messages initially
  document.querySelectorAll('.invalid').forEach(item => item.style.display = 'none');

  // This is to validate each field
  if (!pattern.username.test(username)) {
    setValidationMessage(document.querySelector("#username"), false);
    isTheFormValid = false;
  }

  if (!pattern.emailRegExp.test(emailAddress)) {
    setValidationMessage(document.querySelector("#email"), false);
    isTheFormValid = false;
  }

  if (!pattern.passwordRegExp.test(password)) {
    setValidationMessage(document.querySelector("#password"), false);
    isTheFormValid = false;
  }

  if (!pattern.telephoneRegExp.test(phoneNumber)) {
    setValidationMessage(document.querySelector("#telephone"), false);
    isTheFormValid = false;
  }

  if (!pattern.profileSlug.test(profileSlug)) { // Changed to match the correct key
    setValidationMessage(document.querySelector("#profile_slug"), false);
    isTheFormValid = false;
  }

  // Show success alert if the form is valid
  if (isTheFormValid) {
    alert('Form submitted successfully');
  
    document.querySelector("#username").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#telephone").value = "";
    document.querySelector("#profile_slug").value = "";
  }
});
