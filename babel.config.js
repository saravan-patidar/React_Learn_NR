module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

// setup Testing -devdependency
// - Install @testing-library/React
// - Install jest
//- Install jest& babel dependecies
// - config babel file -babel.config.js
// - disable Babel transpilation in Parcel- .parcelrc
// - Jest Configuration -npx jest --init
// _ Install Js-dom library
// - Install @babel/preset-react to make jsx work
// - Include @babel/preset-react in babel.config.js
// - Install @testing-library/jest-dom
