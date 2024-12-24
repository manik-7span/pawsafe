// Get elements
const thumbnail = document.getElementById("thumbnail");
const videoPopup = document.getElementById("videoPopup");
const video = document.getElementById("video");
const closeBtn = document.getElementById("closeBtn");

// Show the video popup when the image is clicked
thumbnail.addEventListener("click", () => {
  videoPopup.style.display = "flex";
  video.play(); // Autoplay the video
});

// Hide the video popup when the close button is clicked
closeBtn.addEventListener("click", () => {
  videoPopup.style.display = "none";
  video.pause(); // Pause the video
  video.currentTime = 0; // Reset the video to the start
});

// Close the popup if user clicks outside the video content
window.addEventListener("click", (e) => {
  if (e.target === videoPopup) {
    videoPopup.style.display = "none";
    video.pause();
    video.currentTime = 0;
  }
});

  $(document).ready(function(){
    $('.customer__slider').slick({
      dots: true, 
      arrows: false, 
      infinite: true, 
      slidesToShow: 1, 
      slidesToScroll: 1, 
      autoplay: true, 
      autoplaySpeed: 3000, 
    });
  });
  const countdown = () => {
    const endDate = new Date().getTime() + 1000 * 60 * 60 * 24 * 2; // Adjust for 2 days as example
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = endDate - now;
  
      if (difference <= 0) {
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = "Offer Expired";
        return;
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    };
  
    const interval = setInterval(updateTimer, 1000);
  };
  
  countdown();
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const isActive = question.classList.contains("active");
      
      // Remove "active" class from all questions and answers
      document.querySelectorAll(".faq-question").forEach((q) => q.classList.remove("active"));
      document.querySelectorAll(".faq-answer").forEach((a) => a.classList.remove("active"));
      document.querySelectorAll(".faq-question .icon").forEach((icon) => (icon.textContent = "+"));
  
      // Toggle "active" class on the clicked question and its answer
      if (!isActive) {
        question.classList.add("active");
        question.nextElementSibling.classList.add("active");
        question.querySelector(".icon").textContent = "−"; // Change "+" to "−"
      }
    });
  });
  function toggleMenu() {
    const menu = document.querySelector('.mobile__menu');
    menu.classList.toggle('hidden'); // Toggle the 'hidden' class
  }  
    