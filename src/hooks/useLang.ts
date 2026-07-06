"use client";
import { useState, useEffect } from "react";

export function useLang() {
  const [isAr, setIsAr] = useState(false);

  useEffect(() => {
    const check = () => setIsAr(document.documentElement.lang === "ar");
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    return () => obs.disconnect();
  }, []);

  return { isAr };
}
