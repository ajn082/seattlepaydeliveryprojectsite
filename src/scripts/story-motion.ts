import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Natural scrolling throughout. Text and actions stay readable before the
// bundle loads, with reduced motion, and if JavaScript is unavailable.
export function startStoryMotion() {
  let media: gsap.MatchMedia;

  const initialise = () => {
    media?.revert();
    media = gsap.matchMedia();
    media.add(
      {
        desktop: "(min-width: 768px)",
        mobile: "(max-width: 767px)",
        reduced: "(prefers-reduced-motion: reduce)",
        print: "print",
      },
      (context) => {
        if (context.conditions?.reduced || context.conditions?.print) return;
        const mobile = Boolean(context.conditions?.mobile);

        gsap.utils
          .toArray<HTMLElement>("[data-reveal], .path-heading h2")
          .forEach((element) => {
            SplitText.create(element, {
              type: "lines",
              tag: "span",
              linesClass: "story-line",
              mask: "lines",
              autoSplit: true,
              aria: "auto",
              onSplit(split) {
                return gsap.from(split.lines, {
                  yPercent: 112,
                  duration: mobile ? 0.85 : 1.05,
                  stagger: 0.14,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 88%",
                    once: true,
                  },
                });
              },
            });
          });

        // Read the accepted offer first, then expand the frame to waiting
        // time. Only the bracket and labels move: no data proportions change.
        gsap.utils.toArray<HTMLElement>(".time-explainer").forEach((figure) => {
          const sequence = gsap.timeline({
            defaults: { ease: "power3.out", duration: 0.85 },
            scrollTrigger: {
              trigger: figure,
              start: "top 82%",
              once: true,
            },
          });
          sequence
            .from(
              figure.querySelector(".figure-arrow"),
              { y: 34, rotation: -48, scale: 0.55 },
              0,
            )
            .from(
              figure.querySelectorAll(
                ".engaged > strong, .engaged > span:last-child",
              ),
              { y: 34, stagger: 0.13 },
              0.12,
            )
            .from(
              figure.querySelector(".time-bracket span"),
              { scaleX: 0.02, transformOrigin: "left center", duration: 1.2 },
              0.25,
            )
            .from(
              figure.querySelectorAll(".waiting span"),
              { y: 34, stagger: 0.2 },
              0.5,
            )
            .from(
              figure.querySelectorAll(".time-definition p"),
              { y: 26, stagger: 0.17 },
              0.85,
            );
        });

        gsap.utils
          .toArray<HTMLElement>("[data-hour-statement]")
          .forEach((poster) => {
            const sequence = gsap.timeline({
              defaults: { ease: "none", duration: 1 },
              scrollTrigger: {
                trigger: poster,
                start: "top 95%",
                end: "bottom 42%",
                scrub: 0.75,
              },
            });
            sequence
              .from(
                poster.querySelector("span"),
                {
                  x: mobile ? -52 : -156,
                  rotation: mobile ? -2 : -3.5,
                  scale: 0.94,
                },
                0,
              )
              .from(
                poster.querySelector("strong"),
                { x: mobile ? 52 : 156, rotation: mobile ? 2 : 3, scale: 0.9 },
                0.12,
              )
              .from(
                poster.querySelector(".hour-statement-arrow"),
                { rotation: -80, y: 46, scale: 0.65 },
                0.2,
              )
              .from(
                poster.querySelector(".statement-rule"),
                { scaleX: 0, transformOrigin: "left center", duration: 0.9 },
                0.32,
              );
          });

        // The two sources open toward one another like research sheets.
        // Their headings and body copy move together; there is no text fade.
        gsap.utils
          .toArray<HTMLElement>(".evidence-item")
          .forEach((element, index) => {
            const direction = index % 2 === 0 ? -1 : 1;
            gsap.from(element, {
              x: direction * (mobile ? 12 : 24),
              rotationY: direction * (mobile ? 12 : 22),
              rotation: direction * (mobile ? 0.8 : 1.6),
              transformOrigin: direction < 0 ? "right center" : "left center",
              duration: 1.15,
              ease: "power3.out",
              scrollTrigger: { trigger: element, start: "top 85%", once: true },
            });
          });

        // Lilac shutters uncover a row at a time. The text and grid stay put.
        gsap.utils
          .toArray<HTMLElement>("[data-topic]")
          .forEach((cell, index) => {
            gsap.fromTo(
              cell,
              { "--topic-cover": 1 },
              {
                "--topic-cover": 0,
                duration: 0.9,
                delay: (index % (mobile ? 2 : 3)) * 0.14,
                ease: "power3.inOut",
                scrollTrigger: { trigger: cell, start: "top 84%", once: true },
              },
            );
          });

        // Expand the invitation's printed field behind readable, static copy.
        gsap.utils
          .toArray<HTMLElement>(".invitation-backdrop")
          .forEach((backdrop) => {
            gsap.from(backdrop, {
              scaleY: 0,
              transformOrigin: "center center",
              duration: 1.1,
              ease: "power4.inOut",
              scrollTrigger: {
                trigger: backdrop.parentElement,
                start: "top 82%",
                once: true,
              },
            });
          });

        // Sweep a campaign poster in from the side. The body and CTA stay put.
        gsap.utils
          .toArray<HTMLElement>(".involvement-section")
          .forEach((section) => {
            const sequence = gsap.timeline({
              defaults: { duration: 1.05, ease: "power4.inOut" },
              scrollTrigger: { trigger: section, start: "top 82%", once: true },
            });
            sequence
              .from(
                section.querySelector(".involvement-backdrop"),
                { scaleX: 0, transformOrigin: "left center" },
                0,
              )
              .from(
                section.querySelector("h2"),
                { xPercent: -108, ease: "power3.out", duration: 1.15 },
                0.16,
              );
          });

        gsap.utils
          .toArray<HTMLElement>(".section-sticker")
          .forEach((sticker) => {
            gsap.from(sticker, {
              rotation: -18,
              scale: 0.75,
              duration: 0.8,
              ease: "back.out(1.3)",
              scrollTrigger: { trigger: sticker, start: "top 88%", once: true },
            });
          });

        const artwork = document.querySelector(".hero-artwork");
        const hero = document.querySelector(".home-hero");
        if (artwork && hero) {
          // The research question leads: its emphasis moves in a readable wave.
          // Illustration and lettering settle back to their opening poses.
          const ambient = gsap.timeline({
            repeat: -1,
            paused: true,
          });
          ambient
            .to(
              artwork.querySelector(".hero-courier"),
              {
                x: mobile ? 4 : 10,
                y: mobile ? -5 : -12,
                rotation: 1.5,
                duration: 3,
                repeat: 3,
                yoyo: true,
                ease: "sine.inOut",
              },
              0,
            )
            .to(
              artwork.querySelector(".hero-art-backplate"),
              {
                rotation: 6,
                duration: 3,
                repeat: 3,
                yoyo: true,
                ease: "sine.inOut",
              },
              0,
            )
            .to(
              hero.querySelector(".headline-highlight"),
              {
                rotation: 1.2,
                duration: 1.5,
                repeat: 7,
                yoyo: true,
                ease: "sine.inOut",
              },
              0,
            )
            .to(
              hero.querySelector(".headline-keyword"),
              {
                y: mobile ? -2 : -3,
                rotation: -2,
                duration: 3,
                repeat: 3,
                yoyo: true,
                ease: "sine.inOut",
              },
              0,
            );
          const letterWave = gsap.timeline({ repeat: 3, repeatDelay: 1.35 });
          letterWave.to(hero.querySelectorAll(".hero-char"), {
            y: mobile ? -3.5 : -7,
            rotation: (index) => (index % 2 === 0 ? -3 : 3),
            duration: 0.32,
            ease: "sine.inOut",
            stagger: { each: 0.04, repeat: 1, yoyo: true },
          });
          ambient.add(letterWave, 0);
          ambient.to(
            artwork.querySelector(".hero-art-speedlines"),
            {
              x: mobile ? -6 : -14,
              opacity: 0.3,
              duration: 1.5,
              repeat: 7,
              yoyo: true,
              ease: "sine.inOut",
            },
            0,
          );
          let heroVisible = false;
          const syncPlayback = () => {
            ambient.paused(!heroVisible || document.hidden);
          };
          const observer = new IntersectionObserver(([entry]) => {
            heroVisible = entry.isIntersecting;
            syncPlayback();
          });
          observer.observe(hero);
          syncPlayback();
          document.addEventListener("visibilitychange", syncPlayback);

          return () => {
            observer.disconnect();
            document.removeEventListener("visibilitychange", syncPlayback);
          };
        }
      },
    );
  };

  const pageHide = () => media?.revert();
  const pageShow = (event: PageTransitionEvent) => {
    if (event.persisted) initialise();
  };
  initialise();
  document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener("pagehide", pageHide);
  window.addEventListener("pageshow", pageShow);

  return () => {
    media?.revert();
    window.removeEventListener("pagehide", pageHide);
    window.removeEventListener("pageshow", pageShow);
  };
}
