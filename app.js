Promise.all(
  Array.from(document.images)
    .filter((img) => !img.complete)
    .map(
      (img) =>
        new Promise((resolve) => {
          img.onload = img.onerror = resolve;
        })
    )
).then(() => {
  setTimeout(loadingDone, 3000);
});

const loadingDone = () => {
  const pageLoadTl = gsap.timeline();

  pageLoadTl
    .to(".loader-bg", {
      display: "none",
      autoAlpha: 0,
      duration: 2,
    })
    .to(
      "html",
      {
        overflow: "auto",
      },
      "<"
    )
    .fromTo(
      "#bg",
      {
        scale: 1.2,
      },
      { scale: 1.1, duration: 2 },
      "<"
    );
};

// parallax
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 576) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        start: "top top",
        end: "+=2000%",
        // markers: true,
        toggleActions: "play pause resume reset",
      },
    });
    tl.to("#rock", { y: -250, duration: 5 })
      .to("#girl", { y: -200, duration: 5 }, "<")
      // .to("#bg", { y: -100, duration: 5 }, "<")
      .to(".title", { y: -200, scale: 1.3, opacity: 0, duration: 5 }, "<")
      .to(".cta", { scale: 1.1, opacity: 0, duration: 3 }, "<")
      .to(".scroll-animation", { y: 50, opacity: 0, duration: 3 }, "<")
      .fromTo("#bg", { scale: 1.1, ease: "none" }, { scale: 1, duration: 5 }, 0)
      .to(
        ".blur",
        5,
        {
          top: "0%",
        },
        "<"
      )
      .to(
        ".feature-section",
        5,
        {
          top: "0%",
        },
        "<"
      )
      .fromTo(
        ".bg-border-wrapper",
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 5,
        }
      )
      .fromTo(
        ".feature-texts",
        { y: -100, autoAlpha: 0, ease: "power2.in" },
        { y: 0, autoAlpha: 1, duration: 5 },
        "-=3"
      )
      .to(".feature-texts .text", {
        y: "0%",
        duration: 6,
        stagger: 1,
      })
      .fromTo(
        ".random-img.one",
        { x: "10%", autoAlpha: 0, ease: "power2.in" },
        { x: "-30%", autoAlpha: 1, duration: 8 }
      )
      .fromTo(
        ".random-img.two",
        { x: "10%", autoAlpha: 0, ease: "power2.in" },
        { x: "20%", autoAlpha: 1, duration: 8 }
      )
      .fromTo(
        ".random-img.three",
        { x: "10%", autoAlpha: 0, ease: "power2.in" },
        { x: "-20%", autoAlpha: 1, duration: 8 }
      )
      .to(
        ".feature-texts .text",
        { y: "-100%", duration: 6, stagger: 1 },
        "+=6"
      )
      .to(".bg-border-wrapper", {
        autoAlpha: 0,
        duration: 5,
      })
      .to(".random-img.one", {
        x: "30%",
        autoAlpha: 0,

        duration: 8,
      })
      .to(".random-img.two", {
        x: "30%",
        autoAlpha: 0,

        duration: 8,
      })
      .to(".random-img.three", {
        x: "30%",
        autoAlpha: 0,

        duration: 8,
      })
      .fromTo(
        ".feature-texts .big-text",
        { autoAlpha: 0, x: "-30%" },
        {
          autoAlpha: 1,
          x: "0",
          duration: 6,
        }
      )
      .to(".big-img-bg", {
        opacity: 1,
        scale: 1,
        backgroundColor: "#23232317",
        duration: 18,
        ease: "slow( 0.7, 0.7, false)",
      })
      .fromTo(
        ".big-text-span",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 6 },
        "-=10"
      )
      .to(".feature-texts .big-text", { autoAlpha: 0, duration: 8 }, "+=6")
      .to(".big-img-bg", {
        scale: 1.1,
        backgroundColor: "#232323d3",
        filter: "blur(10px)",
        duration: 8,
      })
      .to(".feature-title", { x: 70, autoAlpha: 1, duration: 6 })
      .fromTo(
        ".feature-container .overlay",
        { x: "100%" },
        { x: 0, duration: 6 },
        "-=6"
      )
      .fromTo(
        ".feature-container .hide",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 6 }
      )
      .to(".feature-container .text", {
        x: "0%",
        opacity: 0.69,
        duration: 6,
        ease: "slow( 0.7, 0.7, false)",
      })
      // feature Entering
      .fromTo(
        ".feature-img-wrapper",
        { x: -100, autoAlpha: 0, ease: "expo" },
        { x: 0, autoAlpha: 1, duration: 8, stagger: 3 },
        "+=6"
      )
      .fromTo(
        ".feature .text-wrapper",
        { autoAlpha: 0, ease: "expo" },
        { autoAlpha: 1, duration: 8, stagger: 3 },
        "<1"
      )
      .to(".feature-section", {
        backgroundColor: "#232323",
        duration: 6,
      })
      // feature leaving
      .to(".feature .text-wrapper", {
        autoAlpha: 0,
        duration: 8,
        stagger: 3,
      })
      .to(
        ".feature-img-wrapper",
        { autoAlpha: 0, stagger: 3, duration: 8 },
        "<"
      )
      .to(".feature-title", { autoAlpha: 0, duration: 6 }, "<")
      // things entering
      .to(
        ".things-section",
        5,
        {
          top: "0%",
          duration: 8,
        },
        "<"
      )
      .fromTo(
        ".things-intro",
        { y: -100, autoAlpha: 0, ease: "power2.in" },
        { y: 0, autoAlpha: 1, duration: 6 }
      )
      .fromTo(
        ".gridBlock",
        { scale: 1.3, x: "10%", autoAlpha: 0 },
        { scale: 1, x: "0%", duration: 6, autoAlpha: 1, stagger: 1 }
      )
      .fromTo(
        ".things-intro .big-text",
        { autoAlpha: 0, x: -100 },
        { autoAlpha: 1, x: 0, duration: 6 }
      )
      .fromTo(
        ".things-intro .small-text",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 6 }
      )
      .to(".things-intro .small-text span", {
        x: "0%",
        opacity: 0.69,
        duration: 6,
        ease: "slow( 0.7, 0.7, false)",
      })
      .to(".things-section", {
        backgroundColor: "#191919",
        duration: 10,
      })
      .to(".things-intro .big-text", { autoAlpha: 0, x: -50, duration: 10 })
      .to(".things-intro .small-text span", {
        autoAlpha: 0,
        x: "-100%",
        duration: 10,
      })
      .to(".things-intro .small-text", { autoAlpha: 0, duration: 10 })
      .to(".gridBlock", {
        scale: 1.3,
        x: "20%",
        duration: 6,
        autoAlpha: 0,
        stagger: 1,
      })
      .to(".things-section", { backgroundColor: "#232323", duration: 8 })
      .fromTo(
        ".things-container .hide",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 6 }
      )
      .to(".things-container .text", {
        x: "0%",
        opacity: 0.69,
        duration: 6,
        ease: "slow( 0.7, 0.7, false)",
      })
      .fromTo(
        ".things-img-wrapper",
        { y: -100, autoAlpha: 0, ease: "power4.inOut" },
        { y: 0, autoAlpha: 0.79, duration: 6, stagger: 2 }
      )
      .fromTo(
        ".things .text-wrapper h3",
        { y: -100, autoAlpha: 0, ease: "power4.inOut" },
        { y: 0, autoAlpha: 1, duration: 6, stagger: 2 },
        "<1"
      )
      .to({}, { duration: 20 });

    // cta
    let cta = document.querySelector(".cta");
    cta.addEventListener("click", () => {
      gsap.to(window, {
        duration: 5,
        scrollTo: { y: 2800, autoKill: true },
        ease: "power2",
      });
    });
    // scroll progress
    window.onscroll = () => {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrolled = (winScroll / height) * 100;
      gsap.set("#progress-bar", {
        width: `${scrolled}%`,
        scrollTrigger: { scrub: 0.3 },
      });
    };
  } else {
    gsap.utils.toArray(".sm-reveal").forEach((elem) => {
      gsap.set(elem, { autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: elem,
        once: true,
        onEnter: () => {
          elem.style.opacity = "0";
          gsap.fromTo(
            elem,
            { y: 100, autoAlpha: 0 },
            {
              duration: 0.8,
              y: 0,
              autoAlpha: 1,
              ease: "expo",
              overwrite: "auto",
            }
          );
        },
      });
    });
  }
  if (window.innerWidth < 993) {
    // =============================Mobile navigation==============================

    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links li");

    let navTl = gsap.timeline({ paused: true });

    const openNav = () => {
      animateOpenNav();
      burger.addEventListener("click", () => {
        navTl.reversed(!navTl.reversed());

        burger.classList.toggle("toggle");
      });
    };

    const animateOpenNav = () => {
      navTl
        .fromTo(
          navLinks,
          {
            ease: "power3.out",
            scaleY: 0,
          },
          {
            scaleY: 1,
            duration: 0.3,
          }
        )
        .to(
          "nav",
          {
            backgroundColor: "#232323",
            duration: 0.3,
          },
          "<"
        )
        .to(".logo a", { text: "Follow us", duration: 0.5 }, "<")
        .to(
          navItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: {
              each: 0.1,
              ease: "power1.in",
            },
          },
          "<"
        )

        .reverse();
    };

    openNav();
  }
});

// carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
