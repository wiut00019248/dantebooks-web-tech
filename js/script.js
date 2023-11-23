const searchBox = document.querySelector(".form-box");

document.querySelector("#search-btn").onclick = () => {
  searchBox.classList.toggle("active");
};

// Add active class to the current button
window.onscroll = () => {
  searchBox.classList.remove("active");

  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

// Add active class to the current button
window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

var loginForm = document.querySelector(".login-form-container");

// Add active class to the current button
document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};

// Add active class to the current button
document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.remove("active");
};

// Validate form
const sender = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const success = document.getElementById("success");
const error = document.querySelectorAll(".error");

// Validate form
function validateForm() {
  clearMessages();
  let errorFlag = false;
  if (sender.value.length < 1) {
    error[0].innerHTML = "Name is required";
    sender.classList.add("error-border");
    errorFlag = true;
  }
  if (!validEmail(email.value)) {
    error[1].innerHTML = "Email is required";
    email.classList.add("error-border");
    errorFlag = true;
  }
  if (message.value.length < 1) {
    error[2].innerHTML = "Message is required";
    message.classList.add("error-border");
    errorFlag = true;
  }
  if (!errorFlag) {
    success.innerHTML = "Message sent successfully!";
  }
}

// Clear messages
function clearMessages() {
  error.forEach((element) => {
    element.innerHTML = "";
  });
  success.innerHTML = "";
  sender.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

// Validate email
function validEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Auto scrolling effect
var booksList = document.getElementById("books-list");

function scrollBooksList() {
  if (booksList.scrollLeft + booksList.clientWidth >= booksList.scrollWidth) {
    booksList.scrollLeft = 0;
  } else {
    booksList.scrollLeft += booksList.clientWidth;
  }
}

var scrollInterval = setInterval(scrollBooksList, 3000);

// Stop auto scrolling effect on mouseover
booksList.addEventListener("mouseover", () => {
  clearInterval(scrollInterval);
});

// Start auto scrolling effect on mouseout
booksList.addEventListener("mouseout", () => {
  scrollInterval = setInterval(scrollBooksList, 3000);
});
