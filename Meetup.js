$(document).ready(function() {
  // toggle using class only (CSS handles animation)
  $(".stagger-btn").on("click", function(e) {
    e.stopPropagation();
    const $container = $(this).closest(".stagger-dropdown");
    $container.toggleClass("open");
    const isOpen = $container.hasClass("open");
    $(this).attr("aria-expanded", String(isOpen));
    $container.find(".stagger-menu").attr("aria-hidden", String(!isOpen));
    if (isOpen) setTimeout(() => $container.find(".stagger-item").first().focus(), 150);
  });

  $(".stagger-item").on("click", function(e) {
    const selected = $(this).text().trim();
    const $container = $(this).closest(".stagger-dropdown");
    $container.find(".stagger-btn span").text(selected);
    $container.removeClass("open");
    $container.find(".stagger-btn").attr("aria-expanded", "false");
    $container.find(".stagger-menu").attr("aria-hidden", "true");
  });

  // outside click closes
  $(document).on("click", function() {
    $(".stagger-dropdown").removeClass("open");
    $(".stagger-dropdown .stagger-btn").attr("aria-expanded", "false");
    $(".stagger-dropdown .stagger-menu").attr("aria-hidden", "true");
  });

  // keyboard shortcuts
  $(document).on("keydown", function(e) {
    const $active = $(document.activeElement);
    if (e.key === "Escape") $(".stagger-dropdown").removeClass("open");
    if ($active.hasClass("stagger-btn") && e.key === "ArrowDown") {
      e.preventDefault();
      const $container = $active.closest(".stagger-dropdown");
      $container.addClass("open");
      $container.find(".stagger-item").first().focus();
    }
  });
});


   $(document).ready(function () {
      function performSearch() {
        let query = $("#searchInput").val().trim();
        if (query) {
          alert("Searching for: " + query); 
        }
      }
      $("#searchForm").on("submit", function (e) {
        e.preventDefault();
        performSearch();
      });
      $(".search-icon").on("click", function () {
        performSearch();
      });
    });


  document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".meetup-track");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let index = 0;
  const cardCount = document.querySelectorAll(".meetup-card").length;
  const visibleCards = 3;

  function updateCarousel() {
    const cardWidth = document.querySelector(".meetup-card").offsetWidth + 16; // card + gap
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    // hide/show arrows based on index
    if (index === 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "flex";
    }

    if (index >= cardCount - visibleCards) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "flex";
    }
  }

  nextBtn.addEventListener("click", () => {
    if (index < cardCount - visibleCards) {
      index++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);

  // initialize state on load
  updateCarousel();
});


  // Smooth fade-in on load
  window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");

    // Add soft glow shimmer overlay
    const overlay = document.createElement("div");
    overlay.classList.add("page-loader-overlay");
    document.body.appendChild(overlay);
    setTimeout(() => overlay.remove(), 1000);
  });

  // Smooth fade-out on page navigation
  document.querySelectorAll("a").forEach((link) => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("javascript:")) return;

        e.preventDefault();
        document.body.classList.add("page-transition");
        setTimeout(() => {
          window.location.href = href;
        }, 400);
      });
    }
  });


let day = 3;

    function updateCalendar(next = true) {
      const flipBox = document.getElementById("flipBox");
      const front = document.getElementById("day-front");
      const back = document.getElementById("day-back");

      // Update day
      day = next ? day + 1 : day - 1;
      if (day < 1) day = 31;
      if (day > 31) day = 1;

      // Set next value to the back side
      back.textContent = day + "th";

      // Trigger flip animation
      flipBox.classList.add("flip");

      // After animation ends, swap content
      setTimeout(() => {
        front.textContent = day + "th";
        flipBox.classList.remove("flip");
      }, 600);
    }

    document.getElementById("nextBtn").onclick = () => updateCalendar(true);
    document.getElementById("prevBtn").onclick = () => updateCalendar(false);