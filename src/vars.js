// Colours
export const color = {
  white: '#fff',
  black: '#151820',
  blue: '#0433ff',
  sky: '#e5eeff',

  nucleus: '#3d1d90',
  education: '#00A9C6',
  people: '#5500C8',
  agile: '#eed900',
  express: '#bc2487',
  metrik: '#00bc01',
  pebble: '#ed517f',
}

// Typography
export const type = {
  tera: '84px',
  giga: '62px',
  mega: '48px',
  alpha: '38px',
  beta: '26px',
  gamma: '20px',
  delta: '16px',
  epsilon: '14px',
  zeta: '12px',

  fontRegular: 'normal',
  fontBold: 'bold',
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
