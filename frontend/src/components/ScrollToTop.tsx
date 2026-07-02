import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to the top on every route change so navigating
 * (header, footer, logo, or any in-app link) always lands at the top.
 * When the URL includes a hash (e.g. /#earn), it scrolls to that section
 * instead so in-page anchor links work across routes.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Wait a frame so the target section is mounted before scrolling.
      const scrollToHash = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      const timer = window.setTimeout(scrollToHash, 60);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
