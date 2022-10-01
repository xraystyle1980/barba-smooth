let percentTop;
let percentLeft;
$(document).on("click", function (e) {
  let mouseTop = e.pageY - $(window).scrollTop();
  let mouseLeft = e.pageX;
  percentTop = (mouseTop / $(window).height()) * 100;
  percentLeft = (mouseLeft / $(window).width()) * 100;
});

function updateCurrentClass() {
  $(".w--current").removeClass("w--current");
  $(".nav a").each(function (index) {
    if ($(this).attr("href") === window.location.pathname) {
      $(this).addClass("w--current");
    }
  });
}

barba.init({
  preventRunning: true,
  transitions: [
    {
      enter(data) {
        updateCurrentClass();
        gsap.defaults({
          ease: "power2.inOut",
          duration: 1.2
        });
        if ($(".menu_link.w--current").length > 0) {
          // If going to internal page
          gsap.fromTo(".is-home", { x: "0%" }, { x: "49%" });
          gsap.fromTo(".is-about", { x: "-49%" }, { x: "0%" });
        } else {
          // If going to the homepage
          gsap.fromTo(".is-home", { x: "49%" }, { x: "0%" });
          gsap.fromTo(".is-about", { x: "0%" }, { x: "-49%" });
        }

        $(data.next.container).addClass("fixed");
        // Reveal page with clippath
        return gsap.fromTo(
          data.next.container,
          { clipPath: `circle(0.5% at ${percentLeft}% ${percentTop}%)` },
          {
            clipPath: `circle(140.9% at ${percentLeft}% ${percentTop}%)`,
            onComplete: () => {
              $(window).scrollTop(0);
              $(data.next.container).removeClass("fixed");
            }
          }
        );
      }
    }
  ]
});
