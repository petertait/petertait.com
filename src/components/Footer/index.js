import { breakpoint } from '../../vars'

import Social from '../../components/Social'

const Footer = () => {
  const cx = {
    footer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '30px',
      display: 'block',

      [breakpoint.medium]: {
        paddingBottom: '100px',
        paddingTop: '30px',
        display: 'flex'
      }
    },
    legal: {
      [breakpoint.medium]: {
        marginBottom: '20px'
      }
    }
  }

  var today = new Date();
  var year = today.getFullYear();

  return (
    <footer className={cx.footer}>
      <div className={cx.legal}>{year + ' © Peter Tait Ltd.'}</div>
      <Social/>
    </footer>
  )
}

export default Footer
