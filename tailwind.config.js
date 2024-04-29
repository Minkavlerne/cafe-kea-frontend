/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
              "background-kea": "#E1BB80",
              "text-kea": "#352208",
              "filler-kea": "#7B6B43",
            },
        },
    },
    plugins: [],
};
