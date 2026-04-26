import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SHOW_AFTER_SCROLL_Y = 250;

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      setIsVisible(window.scrollY >= SHOW_AFTER_SCROLL_Y);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    updateVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleScrollToTop}
      className={`fixed right-4 bottom-5 z-40 flex h-22 w-22 items-center justify-center rounded-full border border-sky-700/30 bg-sky-500 text-white shadow-lg shadow-sky-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 sm:right-6 sm:bottom-6 sm:h-12 sm:w-12 md:right-8 md:bottom-8 md:h-14 md:w-14 ${isVisible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <ArrowUp className="h-10 w-10 sm:h-6 sm:w-6" strokeWidth={2.5} />
    </button>
  );
}

export default ScrollToTopButton;
