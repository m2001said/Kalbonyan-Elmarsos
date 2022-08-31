// ------------loading....... //
window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-section").classList.add("active");
  // page loader
  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 600);
});
// ------------toggle nav --------------------------//
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  //hide the second scrolling
  document.body.classList.toggle("hide-scrolling");
});

//for hiding the section
hideSection = () => {
  document.querySelector("section.active").classList.toggle("fade-out");
};

//
toggleNavbar = () => {
  document.querySelector(".header").classList.toggle("active");
};

// ------------active section--------------------------//
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    //active the overlay
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 300);
  }
});

// ------------item detail popup--------------------------//
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortFolioPopup();
    portfolioItemDetails(e.target.parentElement);
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
  }
});

togglePortFolioPopup = () => {
  //toggle between open class which have the visibility property
  document.querySelector(".portfolio-popup").classList.toggle("open");
  //hide the second scrolling
  document.body.classList.toggle("hide-scrolling");
  //toggle between the opacity of the background
  document.querySelector(".main").classList.toggle("fade-out");
};
//for close the item with X button
document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortFolioPopup);
//function for changing details of the project
portfolioItemDetails = (portfolioItem) => {
  //change the img
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;
  //change the header
  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;
  //change the body
  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
};
//for close the item without X button = out of the box
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortFolioPopup();
  }
});
// ------------item detail popup end--------------------------//
