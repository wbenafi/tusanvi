/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "my-pink": "#e6007e",
        "my-purple": "#604696",
        "my-blue": "#0099d7",
        "my-green": "#76b82a",
        "my-yellow": "#ffed00",
      },
    },
  },
  plugins: [animations],
};
