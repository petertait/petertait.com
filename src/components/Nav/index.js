import { Link } from 'react-router'

const Nav = () => {
  const cx = {
    nav: {
      justifyContent: 'flex-end'
    },
    link: {
      marginLeft: '40px',
      borderBottom: 'none'
    }
  }

  const active = { borderBottom: '1px solid' }

  return (
    <nav className={cx.nav}>
      <Link className={cx.link} to="/about" activeStyle={active}>About</Link>
      <a className={cx.link} href='mailto:contact@petertait.com'>Contact</a>
    </nav>
  )
}

export default Nav
