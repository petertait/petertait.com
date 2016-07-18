import Styles from '../../styles'

import Logo from '../../components/Logo'
import Nav from '../../components/Nav'

const Header = () => {
  const header = {
    paddingTop: '40px',
    paddingBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [breakpoint.medium]: {
      paddingBottom: '60px',
    }
  }

  return (
    <header className={gbl.container}>
      <div className={header}>
        <Logo/>
        <Nav/>
      </div>
    </header>
  )
}

export default Header
