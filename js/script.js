/*catalog*/
const buy = document.querySelectorAll(".buy");
const buyPopup = document.querySelector(".modal-cart");
const buyClose = buyPopup.querySelector(".button-close");
const shoppingContinue = buyPopup.querySelector(".button-continue");

for (let i = 0; i < buy.length; i++) {
  buy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove("hidden");
    buyPopup.classList.add("popup");
  })
}

shoppingContinue.addEventListener("click", function () {
  buyPopup.classList.add("hidden");
});

buyClose.addEventListener("click", function () {
  buyPopup.classList.add("hidden");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    buyPopup.classList.add("hidden");
  }
});

/*index*/
const body = document.querySelector("body");
if (!body.classList.contains("catalog-page")) {
  const slides = document.querySelectorAll(".gallery-slider");
  const sliderArrow = document.querySelectorAll(".gallery-arrow");

  let i = 0;

  for (let j=0; j<sliderArrow.length; j++) {
    sliderArrow[j].addEventListener("click", function() {
    ++i;
    if (i>= slides.length) {
      slides[i-1].classList.add("hidden");
      i=0;
      slides[i].classList.remove("hidden");
    } else {
      slides[i-1].classList.add("hidden");
      slides[i].classList.remove("hidden");
      }
    });
  }

  const contactLink = document.querySelector(".contacts-form");
  const contactPopup = document.querySelector(".modal-contact");
  const contactForm = contactPopup.querySelector(".contact-form");
  const contactName = contactPopup.querySelector("[name=name]");
  const contactEmail = contactPopup.querySelector("[name=email]");
  const contactComment = contactPopup.querySelector("[name=letter]");
  const contactClose = contactPopup.querySelector(".button-close");

  let isStorageSupport = true;
  let storageName = "";
  let storageEmail = "";

  try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  contactLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.remove("hidden");
    contactPopup.classList.add("popup");
    if (storageName || storageEmail) {
      contactName.value = storageName;
      contactEmail.value = storageEmail;
    }
    contactName.focus();
  });

  contactForm.addEventListener("submit", function (evt) {
    if (!contactName.value || !contactEmail.value || !contactComment.value) {
      evt.preventDefault();
      contactPopup.classList.remove("error");
      contactPopup.offsetWidth = contactPopup.offsetWidth;
      contactPopup.classList.add("error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", contactName.value);
        localStorage.setItem("email", contactEmail.value);
      }
    }
  });

  contactClose.addEventListener("click", function () {
    contactPopup.classList.add("hidden");
    contactPopup.classList.remove("popup");
    contactPopup.classList.remove("error");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (!contactPopup.classList.contains("hidden")) {
        contactPopup.classList.add("hidden");
        contactPopup.classList.remove("popup");
        contactPopup.classList.remove("error");
      }
    }
  });

  const mapLink = document.querySelector(".contacts-mini-map");
  const mapPopup = document.querySelector(".modal-map");
  const mapClose = mapPopup.querySelector(".button-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("hidden");
    mapPopup.classList.add("popup");
  });

  mapClose.addEventListener("click", function () {
    mapPopup.classList.add("hidden");
    mapPopup.classList.remove("popup");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (!mapPopup.classList.contains("hidden")) {
        mapPopup.classList.add("hidden");
        mapPopup.classList.remove("popup");
      }
    }
  });
}
