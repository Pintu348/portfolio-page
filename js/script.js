// let clickElement = document.querySelectorAll("a:link.print");
// clickElement.forEach(function (element) {
//   element.addEventListener("click", function (event) {
//     event.preventDefault();
//     const targetElementId = this.getAttribute("href");
//     if (targetElementId === "#") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     } else if (targetElementId.startsWith("#")) {
//       const targetElement = document.querySelector(targetElementId);
//       targetElement.scrollIntoView({ behavior: "smooth" });
//     }
//   })
// })


const targetElement = document.querySelector(".navbar-collapse");
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(function (link) {
  link.addEventListener("click", function () {
    navLink.forEach(link => {
      link.classList.remove("active");
    })
    this.classList.add("active");
    if (targetElement.getAttribute("class").includes("show")) {
      setTimeout(() => {
        targetElement.classList.remove("show");
      }, 200);
    }
  })
})

document.body.addEventListener("click", function (event) {
  if (targetElement.getAttribute("class").includes("show")) {
    const navbar = document.querySelector(".fixed-top");
    if (!navbar.contains(event.target)) {
      targetElement.classList.remove("show");
    }
  }
})

document.querySelector(".action-form").addEventListener("submit", function (event) {
  event.preventDefault();
});


// // const yourElement = document.querySelector('.main-header');
// // const scrollThreshold = 500;
// // window.addEventListener('scroll', function () {
// //   const scrollPosition = window.scrollY;
// //   if (scrollPosition > scrollThreshold) {
// //     yourElement.classList.add('position-sticky');
// //   } else {
// //     yourElement.classList.remove('position-sticky');
// //   }
// // });
