module.exports = {
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#001928',
      'green': '#27AE60',
      'red': '#C82A2A',
      'disable': '#9cb1bf',
      'primary': '#6EBAE7',
      'primary-dark': '#538CAD',
      'gray': '#666666',
      'gray-light': '#999999',
      'gray-lighter': '#E6E8EA',
    },
    },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/aspect-ratio') ],
  corePlugins: {
    animation: false,
    float: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia:false,
    blur: false,
    brightness: false,
    caretColor: false,
    contrast :false,
    invert: false,
    fontFamily:false,
    gradientColorStops: false,
    keyframes:false,
    backdropHueRotate: false,
    lineHeight:false,
    accessibility:false,
    alignContent:false,
    alignSelf:false,
    backgroundAttachment:false,
    backgroundClip:false,
    backgroundImage:false,
    backgroundOpacity:false,
    borderOpacity:false,
    clear:false,
    divideColor:false,
    divideOpacity:false,
    divideStyle:false,
    divideWidth:false,
    fontFamily:false,
    fontVariantNumeric:false,
    ringColor:false,
    ringOffsetColor:false,
    ringOffsetWidth:false,
    ringOpacity:false,
    ringWidth:false,
  }
}
