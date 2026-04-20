import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollToPageTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { history } = window;
    const previousScrollRestoration = history.scrollRestoration;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const handlePageShow = () => {
      requestAnimationFrame(() => {
        scrollToPageTop();
      });
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);

      if ("scrollRestoration" in history) {
        history.scrollRestoration = previousScrollRestoration;
      }
    };
  }, []);

  useEffect(() => {
    scrollToPageTop();
  }, [pathname]);

  return null;
}

export default ScrollToTop;
