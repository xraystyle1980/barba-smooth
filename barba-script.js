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
      enter(d
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
