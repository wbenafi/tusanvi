

import { useEffect, useState } from "react";

export function useWindowScroll() {
const element = window;

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (!element) return;
    const handleScroll = () => {
      setScroll(element.scrollY);
    };
    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [element]);
  return scroll;
}