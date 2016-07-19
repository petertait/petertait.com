import { Link } from 'react-router'
import reactCxs from 'react-cxs'

import { type, breakpoint, layout } from '../../vars'

const Hero = ({
  headline,
  link,
  linkText
}) => {
  const cx = {
    container: {
      margin: 'auto',
      maxWidth: layout.maxWidth,
      paddingRight: '20px',
      paddingLeft: '20px',

      [breakpoint.medium]: {
        paddingLeft: layout.gutter,
        paddingRight: layout.gutter
      }
    },
    hero: {
      paddingTop: '40px',
      paddingBottom: '60px',

      [breakpoint.medium]: {
        paddingBottom: '100px'
      }
    },
    h1: {
      fontFamily: type.fontSans,
      fontSize: type.alpha,
      lineHeight: '1.1',
      letterSpacing: '-1px',
      maxWidth: '1000px',

      [breakpoint.medium]: {
        fontSize: type.giga
      },
      [breakpoint.small]: {
        fontSize: type.mega
      }
    },
    button: {
      marginTop: '80px',
      display: 'table'
    }
  }

  return (
    <section className={cx.container}>
      <div className={cx.hero}>
        <h1 className={cx.h1}>{headline}</h1>
        {link && <Link to={link} className={cx.button}>{linkText}</Link>}
      </div>
    </section>
  )
}

export default Hero
