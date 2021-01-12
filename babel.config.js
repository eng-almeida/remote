module.exports = {
    "presets": [
      [
        "next/babel",
        {
          "preset-env": {},
        }
      ]
    ],
    "plugins": [
      [
        "styled-components",
        {
          "ssr": true
        }
      ]
    ]
  }