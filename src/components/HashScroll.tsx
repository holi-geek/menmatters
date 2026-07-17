import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to an element referenced by URL hash after route changes.
 * Handles cross-route navigation (e.g. /gallery -> /#programs).
 */
const HashScroll = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const id = hash.replace("#", "");
    // Retry a few times in case the target section mounts asynchronously.
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts++ < 10) {
        setTimeout(tryScroll, 100);
      }
    };
    tryScroll();
  }, [pathname, hash]);

  return null;
};

export default HashScroll;
