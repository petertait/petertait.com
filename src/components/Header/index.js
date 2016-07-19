import { breakpoint, layout } from '../../vars'

import Logo from '../../components/Logo'
import Nav from '../../components/Nav'

const Header = () => {
  const header = {
    margin: 'auto',
    maxWidth: layout.maxWidth,
    padding: '40px 20px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [breakpoint.medium]: {
      paddingLeft: layout.gutter,
      paddingRight: layout.gutter,
      paddingBottom: '60px'
    }
  }

  return (
    <header className={header}>
      <Logo/>
      <Nav/>
    </header>
  )
}

export default Header
