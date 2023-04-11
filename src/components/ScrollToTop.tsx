import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component is used to fix the issue with hash routing where the page doesn't scroll to the top when navigating to a new page
export default function HashRoutingFix() {
  const { pathname } = useLocation();

  useEffect(() => {
    // @ts-expect-error [typescript complains about instant not being a valid value for behavior, but it is]
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
