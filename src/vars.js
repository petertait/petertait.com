// Colours
import Color from 'color'

export const darken = (c, d) => Color(c).darken(d).rgbString()
export const opacity = (c, a) => Color(c).alpha(a).rgbString()

export const color = {
  black: '#151820',
  white: '#fff',
  purple: '#723cf7',
  teal: '#00d785',
  aqua: '#00c1dd',
  sky: '#e5eeff'
}

// Typography
export const type = {
  tera: '72px',
  giga: '62px',
  mega: '48px',
  alpha: '38px',
  beta: '24px',
  gamma: '18px',
  delta: '16px',
  epsilon: '14px',
  zeta: '12px',

  fontRegular: '400',
  fontBold: '700',
  fontMono: 'Iosevka, monospace',
  fontSans: 'apercu, sans-serif',

  bodySize: '18px',
  bodyWeight: '400'
}

// Layout
export const layout = {
  gutter: '40px',
  maxWidth: '1100px'
}

// Breakpoints
export const breakpoint = {
  large: '@media screen and (min-width: 1100px)',
  medium: '@media screen and (min-width: 800px)',
  small: '@media screen and (min-width: 600px)',
}

const vars = {
  color,
  type,
  layout,
  breakpoint
}

export default vars
