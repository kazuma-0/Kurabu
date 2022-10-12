/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    theme: {
        extend: {
            fontFamily: {
                // sans: ["Inter",...defaultTheme.fontFamily.sans],
                sofia: ["Sofia"],
                sofiaBold: ["Sofia Bold"],
                ligurino: ["Ligurino"],
                rubik: ['rubik']
            },
        },
        plugins: [],
    }
}
