import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window back to the top whenever the route changes.
 * Without this, react-router keeps the previous scroll position, so
 * navigating into a project (e.g. from the bottom of a list) lands the
 * user partway down the new page.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
