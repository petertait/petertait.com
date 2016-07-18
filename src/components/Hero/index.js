import { Link } from 'react-router'

import { type, breakpoint } from '../../vars'
import Styles from '../../styles'

const Hero = ({
  headline,
  link,
  linkText
}) => {
  const cx = {
    hero: {
      paddingTop: '40px',
      paddingBottom: '60px',

      [breakpoint.medium]: {
        paddingBottom: '100px'
      }
    },
    h1: {
      fontSize: type.alpha,
      maxWidth: '1000px',

      [breakpoint.small]: {
        fontSize: type.mega
      },
      [breakpoint.medium]: {
        fontSize: type.giga
      }
    },
    button: {

    }
  }

  return (
    <section className={gbl.container}>
      <div style={cx.hero}>
        <h1 style={cx.h1}>{headline}</h1>
        {link && <Link to={link} style={cx.button}>{linkText}</Link>}
      </div>
    </section>
  )
}

export default Hero
