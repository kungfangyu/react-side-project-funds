/*
 * @Date: 2021-07-04 18:27:12
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-07-04 18:29:04
 * @FilePath: /website-funds/craco.config.js
 */
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}