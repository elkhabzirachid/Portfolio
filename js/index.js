let menu = document.getElementById("menu");
let nav = document.getElementById("nav");
menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});
window.onscroll = () => {
  nav.classList.remove("active");
};
// send message
// document.addEventListener("DOMContentLoaded", function () {
//   const contactForm = document.getElementById("contactForm");

//   contactForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const formData = new FormData(contactForm);
//     fetch("/sendEmail", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => {
//         if (response.ok) {
//           alert("Message sent successfully!");
//           contactForm.reset(); // Clear the form
//         } else {
//           alert("Message sending failed. Please try again later.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert("An error occurred. Please try again later.");
//       });
//   });
// });
