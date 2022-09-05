module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "netflix-blue": "#1363DF",
        "netflix-black": "#06283D",
        "netflix-red": "#e50914",
      },
      backgroundImage: {
        banner:
          "https://media.vanityfair.com/photos/60db6cbbba7beb43db9b1b29/3:2/w_1998,h_1332,c_limit/clifford-the-big-red-dog-film-still-01.jpg",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate", "dracula"],
    darkTheme: "dracula",
  },
};
