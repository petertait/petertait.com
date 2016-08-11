// Colours
export const color = {
  white: '#fff',
  black: '#151820',
  grey: '#ddd',
  green: '#00e39c',
  yellow: '#eed900',
  blue: '#0433ff',
  teal: '#4dded4',
  aqua: '#27cae4',
  sky: '#e5eeff'
}

// Typography
export const type = {
  tera: '72px',
  giga: '62px',
  mega: '48px',
  alpha: '38px',
  beta: '24px',
  gamma: '20px',
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
