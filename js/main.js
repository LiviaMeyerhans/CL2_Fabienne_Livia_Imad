let slideIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;
  slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Automatischer Wechsel alle 5 Sekunden (optional)
setInterval(() => moveSlide(1), 5000);


//Dino
const person = document.getElementById("person");
const book = document.getElementById("book");
const score = document.getElementById("score");

function jump() {
  person.classList.add("jump-animation");
  setTimeout(() => person.classList.remove("jump-animation"), 500);
}

document.addEventListener("keypress", (event) => {
  if (event.code === "Space" && !person.classList.contains("jump-animation")) {
    jump();
  }
});

document.addEventListener("click", () => {
  if (!person.classList.contains("jump-animation")) {
    jump();
  }
});

document.addEventListener("touchstart", () => {
  if (!person.classList.contains("jump-animation")) {
    jump();
  }
});

setInterval(() => {
  const personTop = parseInt(
    window.getComputedStyle(person).getPropertyValue("top")
  );
  const bookLeft = parseInt(
    window.getComputedStyle(book).getPropertyValue("left")
  );
  score.innerText++;

  if (bookLeft < 0) {
    book.style.display = "none";
  } else {
    book.style.display = "";
  }

  if (bookLeft < 100 && bookLeft > 50 && personTop > 150) {
    score.innerText = 0;
  }
}, 50);


