import React, { useEffect, useState } from "react";

function useThemeSwitcher() {
  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [isDark, setIsDark] = useState<boolean>();

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPreference = window.localStorage.getItem("theme");
    const handleChange = () => {
      if (userPreference) {
        let check = userPreference === "true" ? true : false;
        setIsDark(check);
        if (check === true) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? true : false;
        setIsDark(check);
        if (check === true) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  useEffect(() => {
    if (isDark === true) {
      window.localStorage.setItem("theme", "true");
      document.documentElement.classList.add("dark");
    }
    if (isDark === false) {
      window.localStorage.setItem("theme", "false");
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return { isDark, setIsDark };
}

export default useThemeSwitcher;
