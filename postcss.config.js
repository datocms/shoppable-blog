const postcssAutoprefixer = require(`autoprefixer`)
const postcssImport = require(`postcss-import`)
const postcssCssNext = require(`postcss-cssnext`)
const postcssBrowserReporter = require(`postcss-browser-reporter`)
const postcssReporter = require(`postcss-reporter`)

module.exports = () => ({
  plugins: [
    postcssAutoprefixer(),
    postcssImport(),
    postcssBrowserReporter(),
    postcssReporter(),
  ],
})
