import { layout, type, breakpoint } from './vars'

const Styles = () => {
  const gbl = {
    container: {
      position: 'relative',
      margin: 'auto',
      width: '100%',
      maxWidth: layout.maxWidth,
      paddingLeft: '20px',
      paddingRight: '20px',

      [breakpoint.medium]: {
        paddingLeft: layout.gutter,
        paddingRight: layout.gutter,
      }
    },
    h1: {
      fontFamily: type.fontSans,
      lineHeight: '1.1',
      letterSpacing: '-1px'
    },
    h2: {
      '-webkit-font-smoothing': 'antialiased',
      fontFamily: type.fontSans,
      fontSize: type.beta,
      lineHeight: '1.2'
    },
    h3: {
      fontWeight: type.fontRegular,
      fontSize: type.bodySize,
      marginBottom: '40px'
    }
  }
}

export default Styles
