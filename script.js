// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init();


// function learnMore() {
//   alert("Redirecting to Learn More...");
// }

// function seeCourse() {
//   alert("Redirecting to Courses...");
// }
// // Optional interactivity
// // document.querySelectorAll('.feature-item').forEach(item => {
// //   item.addEventListener('click', () => {
// //     alert('You clicked on:' ${item.querySelector('h3').textContent});
// //   });
// // });




// ScrollReveal().reveal(".event-card", {
//   ...scrollRevealOption,
//   delay: 500,
// });

// ScrollReveal().reveal(".event-info", {
//   ...scrollRevealOption,
//   delay: 1000,
// });

// ScrollReveal().reveal(".event-desc", {
//   ...scrollRevealOption,
//   delay: 1500,
// });




// Toggle mobile navbar
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  toggleBtn.classList.toggle("active");
});


// Countdown Timer
const endDate = new Date("2025-08-01T00:00:00").getTime(); // Set your launch date here
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    document.getElementById("countdown").innerHTML = "<h3>Registration Closed</h3>";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // initial call

// Smooth Scroll for Nav Links
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Form Submission
const form = document.querySelector(".register-form form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.querySelector('input[placeholder="Your Name"]').value.trim();
  const phone = this.querySelector('input[placeholder="Your Phone Number"]').value.trim();
  const email = this.querySelector('input[placeholder="Your Email Address"]').value.trim();

  if (name && phone && email) {
    alert(`🎉 Thank you, ${name}! Your registration has been submitted.`);
    form.reset();
  } else {
    alert("⚠️ Please fill in all fields correctly.");
  }
});

// Scroll-to-top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};




// Sticky navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 50);
});



const trainers = [
  {
    name: "Mated Nithan",
    role: "Sr. Web Designer",
    desc: "Expert in front-end technologies and UI/UX design.",
    image: "./image/testimonial2.jpg",
    socials: ["facebook-f", "twitter", "linkedin-in", "pinterest-p"]
  },
  {
    name: "David Cameron",
    role: "Sr. Developer",
    desc: "Full-stack developer with 10+ years of experience.",
    image: "./image/courtsshirt4.jpg",
    socials: ["facebook-f", "twitter", "linkedin-in", "pinterest-p"]
  },
  {
    name: "Jain Redmel",
    role: "Data Science Faculty",
    desc: "Specialist in machine learning and AI training.",
    image: "./image/courstshirt.jpg",
    socials: ["facebook-f", "twitter", "linkedin-in", "pinterest-p"]
  },
  {
    name: "Nathan Macken",
    role: "Sr. Web Designer",
    desc: "Passionate about building intuitive web apps.",
    image: "./image/courtsshirt3.jpg",
    socials: ["facebook-f", "twitter", "linkedin-in", "pinterest-p"]
  }
];

const container = document.getElementById("trainer-section");

trainers.forEach(trainer => {
  const card = document.createElement("div");
  card.className = "team-member";
  card.innerHTML = `
    <img src="${trainer.image}" alt="${trainer.name}" />
    <h3>${trainer.name}</h3>
    <p class="role">${trainer.role}</p>
    <p class="desc">${trainer.desc}</p>
    <div class="social-icons">
      ${trainer.socials.map(icon => `<i class="fab fa-${icon}"></i>`).join('')}
    </div>
  `;
  container.appendChild(card);
});

