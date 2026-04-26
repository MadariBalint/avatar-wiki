import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollToPageTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
}

function resetScrollPosition() {
  scrollToPageTop();

  requestAnimationFrame(() => {
    scrollToPageTop();

    window.setTimeout(() => {
      scrollToPageTop();
    }, 150);
  });
}

function ScrollToTop({ isReady }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const { history } = window;
    const previousScrollRestoration = history.scrollRestoration;

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const handlePageShow = () => {
      resetScrollPosition();
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);

      if ("scrollRestoration" in history) {
        history.scrollRestoration = previousScrollRestoration;
      }
    };
  }, []);

  useLayoutEffect(() => {
    resetScrollPosition();
  }, [pathname]);

  useEffect(() => {
    if (isReady) {
      resetScrollPosition();
    }
  }, [isReady, pathname]);

  return null;
}

export default ScrollToTop;
