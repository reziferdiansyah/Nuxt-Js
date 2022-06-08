const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#100E16",
      white: "#fff",
      linear: "#201B2F",
      transparent: "transparent",
      dark: {
        footer: "#100E16",
        overlay: "#29223E",
      },
      purple: {
        primary: "#362859",
        dark: "#201B2F",
        med: "#362859",
        light: "#2B263C",
        payment: "#221E2E",
        bank: "#2B263C",
        bg: "#393053",
        btn: "#635299",
        btn2: "#453472",
        btn3: "#4C4270",
        sec2: "#22204B",
        sec3: "#291F43",
        sec4: "#1A1723",
        non: "#8262D4",
        jackpot: "#282657",
        nav: "#27213A",
        navMob: "#2A243D",
        content: "#29223E",
        select: "#393153",
        input: "#7256BE",
        input1: "#29223E",
        input2: "#A28BFF",
        input3: "#3C3257",
        placeholder: "#9972FF",
        unfill: "#9E8DF8",
      },
      blue: {
        med: "#4F4BA8",
        light: "#5B32FD",
        DEFAULT: "#1fb6ff",
        dark: "#009eeb",
        linear: "#8F6BED",
        nav: "#3A278A",
      },
      yellow: {
        primary: "#FDD032",
      },
      pink: {
        light: "#ff7ce5",
        DEFAULT: "#ff49db",
        dark: "#ff16d1",
        primary: "#FD1A79",
      },
      gray: {
        primary: "#424242",
        secondary: "#666666",
        light: "#F4F4F4",
      },
      orange: {
        primary: "#FD6C1A",
        pending: "#e8a200",
      },
      red: colors.red,
      green: {
        success: "#2ad100",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "Roboto"],
      pacifico: ["Pacifico", "Roboto"],
      oswald: ["Oswald", "Roboto"],
      roboto: "roboto",
      default: "sans-serif",
      "roboto-mono": ["Roboto Mono", "monospace"],
    },
    screens: {
      /*
        smartphones,
        iPhone,
        portrait 480x320 phones
      */
      small: "7px",
      xs: "320px",
      /*
        portrait e-readers (Nook/Kindle),
        smaller tablets @ 600 or @ 640 wide.
      */
      sm: "481px",
      /*
        portrait tablets,
        portrait iPad,
        landscape e-readers,
        landscape 800x480 or 854x480 phones
      */
      md: "768px",
      /*
        tablet,
        landscape iPad,
        lo-res laptops ands desktops
      */
      lg: "1024px",
      /*
        big landscape tablets,
        laptops,
        and desktops
      */
      xl: "1024px",
      /*
        hi-res laptops and desktops
      */
      "2xl": "1440px",
    },
    extend: {
      colors: {
        black: "#100E16",
        white: "#fff",
        linear: "#201B2F",
        transparent: "transparent",
        dark: {
          footer: "#100E16",
          overlay: "#29223E",
        },
        purple: {
          primary: "#362859",
          dark: "#201B2F",
          med: "#362859",
          light: "#2B263C",
          payment: "#221E2E",
          bank: "#2B263C",
          bg: "#393053",
          btn: "#635299",
          btn2: "#453472",
          btn3: "#4C4270",
          sec2: "#22204B",
          sec3: "#291F43",
          sec4: "#1A1723",
          non: "#8262D4",
          jackpot: "#282657",
          nav: "#27213A",
          navMob: "#2A243D",
          content: "#29223E",
          select: "#393153",
          input: "#7256BE",
          input1: "#29223E",
          input2: "#A28BFF",
          input3: "#3C3257",
          placeholder: "#9972FF",
          unfill: "#9E8DF8",
        },
        blue: {
          med: "#4F4BA8",
          light: "#5B32FD",
          DEFAULT: "#1fb6ff",
          dark: "#009eeb",
          linear: "#8F6BED",
          nav: "#3A278A",
        },
        yellow: {
          primary: "#FDD032",
        },
        pink: {
          light: "#ff7ce5",
          DEFAULT: "#ff49db",
          dark: "#ff16d1",
          primary: "#FD1A79",
        },
        gray: {
          primary: "#424242",
          secondary: "#666666",
          light: "#F4F4F4",
        },
        orange: {
          primary: "#FD6C1A",
          pending: "#e8a200",
        },
        red: colors.red,
        green: {
          success: "#2ad100",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
