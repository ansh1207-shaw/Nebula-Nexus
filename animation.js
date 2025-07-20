window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Header animation
  gsap.from("header", {
    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "bounce.out"
  });

  // Nav links animation
  gsap.from("nav a", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    delay: 0.3,
    ease: "back.out(1.7)"
  });

  // Animate all sections on scroll
  gsap.utils.toArray("main section").forEach((section) => {
    gsap.from(section, {
      scrollTrigger: section,
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Animate profile image
  const profileImg = document.querySelector(".profile-card img");
  if (profileImg) {
    gsap.from(profileImg, {
      scale: 0,
      duration: 1.2,
      delay: 0.5,
      ease: "elastic.out(1, 0.5)"
    });
  }

  // Animate events list items
  const events = document.querySelectorAll("#eventList li");
  if (events.length > 0) {
    gsap.from(events, {
      scrollTrigger: "#eventList",
      opacity: 0,
      x: -30,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    });
  }

  // Nav link hover animation
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, { scale: 1.1, duration: 0.2 });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(link, { scale: 1, duration: 0.2 });
    });
  });
});
gsap.from(profileImg, { scale: 0, duration: 1.2, delay: 0.5, ease: "elastic.out(1, 0.5)" });
gsap.from(".badge", {
  opacity: 0,
  scale: 0.5,
  stagger: 0.15,
  delay: 1,
  ease: "back.out(1.7)"
});
