document.body.style.overflowY = "hidden";

// Check if localStorage has name key
if (sessionStorage.getItem("name")) {
  const visitorName = sessionStorage.getItem("name")
  setName(visitorName);
}

// Set Visitor Name
function setName(visitorName) {
  // Append visitor name to page and localStorage
  document.querySelector(".visitor-name").innerHTML = visitorName;

  // Remove visitor name input section
  document.querySelector(".blur-overlay").style.display = "none";
  document.querySelector(".form-box").style.display = "none";
  document.body.style.overflowY = "auto";
}

// Burger Menu - START
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
})
// Butger Menu - END

// Visitor Name Function - START
document.querySelector(".form-box").addEventListener('submit', submitName);

function submitName(e) {
  e.preventDefault();

  // Initialize visitor name variable
  const visitorName = document.getElementById("visitor-name").value.trim();
  sessionStorage.setItem("name", visitorName);

  setName(visitorName);

  return;
}
// Visitror Name Function - END

// Banner Carousel Function - START
let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("banner-image");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
// Banner Carousel Function - END

// Form Submition - START
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  try {
    // Initialize variable for submition
    const name = document.getElementById("name").value.trim();
    const birthDate = document.getElementById("birth-date").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
    const message = document.getElementById("message").value.trim();

    validateInput(name, birthDate, gender, message);
    showResult(name, birthDate, gender, message);

    return alert("Thank you for your submission!");
  } catch (error) {
    alert(error);
  } finally {
    // Reset form
    document.querySelector(".contact-form").reset();
  }
}

function showResult(name, birthDate, gender, message) {
  // Log for testing data
  console.log(name, birthDate, gender, message);

  // Initialize variable for show the result
  const currentTime = new Date().toDateString();
  const submitName = document.getElementById("submit-name");
  const submitBirthDate = document.getElementById("submit-birth-date");
  const submitGender = document.getElementById("submit-gender");
  const submitMessage = document.getElementById("submit-message");

  // Put the result to page
  document.getElementById("current-time").innerHTML = currentTime;
  submitName.innerHTML = name;
  submitBirthDate.innerHTML = birthDate;
  submitGender.innerHTML = gender;
  submitMessage.innerHTML = message;

  return;
}

function validateInput(name, birthDate, gender, message) {
  // Check all fields inputed
  if (!name && !birthDate && !message) {
    throw alert("Please fill in all fields.");
  }

  // Check gender is right - Say no to LGBT
  if (gender !== "Male" && gender !== "Female") {
    throw "Please select a valid gender.";
  }

  // Check if name is number
  if (!isNaN(name)) {
    throw "Name cannot be a number.";
  }

  return name, birthDate, gender, message;
}
// Form Submition - END