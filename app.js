function nav() {
  const nav = document.querySelector(".nav");
  const menu = document.querySelector(".navlinks");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    menu.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });


  
}

nav();

// about section

const aboutSection = document.querySelector(".about");
const aboutButton = document.querySelector("#read");
const aboutParagraph = document.querySelector(".paragaph");

aboutButton.addEventListener("click", () => {
  aboutParagraph.classList.toggle("active");
  aboutButton.textContent = aboutParagraph.classList.contains("active")
    ? "Read less"
    : "Read more";
});

// faqs
const ans1 = document.querySelector(".ans-1");
const faqQuestions = document.querySelectorAll(".ans h6");
const para = document.querySelectorAll(".ans p");

// faqQuestions.forEach((question) => {
//   question.addEventListener("click", () => {
//     const answer = question.nextElementSibling;
//     answer.classList.toggle("active-1");
//   });
// });


// const faqQuestions = document.querySelectorAll('.question');

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    // Close all answers
    faqQuestions.forEach((q) => {
      const answer = q.nextElementSibling;
      answer.classList.remove("active-1");
    });

    // Open the clicked answer
    const answer = question.nextElementSibling;
    answer.classList.toggle("active-1");
  });
});


// form section

const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  const namevalue = name.value.trim();
  const emailvalue = email.value.trim();
  const phonevalue = phone.value.trim();
  const passwordvalue = password.value.trim();

  if (namevalue == "") {
    e.preventDefault();
    alert("please provide a name");
    name.focus();
    return false;
  }

  if (!isNaN(namevalue)) {
    e.preventDefault();
    alert("please provide a vaild name");
    name.focus();
    return false;
  }

  if (phonevalue == "") {
    e.preventDefault();
    alert("please provide a phone");
    phone.focus();
    return false;
  }
  if (phonevalue.length < 10 || phonevalue.length > 10) {
    e.preventDefault();
    alert("please provide a valid number phone");
    phone.focus();
    return false;
  }

  if (emailvalue == "") {
    e.preventDefault();
    alert("please provide a email");
    email.focus();
    return false;
  }

  if (passwordvalue == "") {
    e.preventDefault();
    alert("please provide a password ");
    password.focus();
    return false;
  }
  if (passwordvalue.length < 5) {
    e.preventDefault();
    alert("please provide a valid  password");
    password.focus();
    return false;
  }
  // alert("data saveds successfully");

  const userData = {
    name: namevalue,
    email: emailvalue,
    phone: phonevalue,
    password: passwordvalue
  };

  localStorage.setItem('userData', JSON.stringify(userData));
  alert("Data saved successfully");

  // Optionally, reset the form
  // form.reset();
});





