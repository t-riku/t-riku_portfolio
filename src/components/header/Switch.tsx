import React, { useEffect, useState } from "react";
import classes from "src/components/header/Header.module.css";

const Switch = () => {
  const [lightTheme, setLightTheme] = useState<any>("");

  const handleToggle = (e: any) => {
    setLightTheme(e.target.checked);
  };

  useEffect(() => {
    if (lightTheme !== "") {
      if (lightTheme) {
        document.documentElement.setAttribute("data-theme", "light");
        window.localStorage.setItem("theme", "light");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "dark");
      }
    }
  }, [lightTheme]);

  //   useEffect(() => {
  //     const root = window.document.documentElement;
  //     const initialColorValue = root.style.getPropertyValue(
  //       "--initial-color-mode"
  //     );
  //     // Set initial darkmode to light
  //     setLightTheme(initialColorValue === "light");
  //   }, []);
  return (
    <div>
      <form action="#" className={classes.form}>
        <label htmlFor="modeChange" className={classes.switch}>
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={lightTheme}
            id="modeChange"
          />
          <span className={classes.slider}></span>
        </label>
      </form>
    </div>
  );
};

export default Switch;
