let percentTop;
let percentLeft;
$(document).on("click", function (e) {
  let mouseTop = e.pageY - $(window).scrollTop();
  let mouseLeft = e.pageX;
  percentTop = (mouseTop / $(window).height()) * 100;
  percentLeft = (mouseLeft / $(window).width()) * 100;
});
"49%" }, { x: "0%" });
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
