import Service from '../../components/Service'

import { breakpoint } from '../../vars'

const Services = () => {
  const cx = {
    container: {
      borderTop: '1px solid rgba(255,255,255,0.2)',
      borderBottom: '1px solid rgba(255,255,255,0.2)',
      padding: '40px 0 50px',

      [breakpoint.medium]: {
        padding: '50px 0 60px'
      }
    },
    services: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  }

  return (
    <section className={cx.container}>
      <h3>Services</h3>
      <div className={cx.services}>
        <Service
          image='images/eye.svg'
          title='Print, branding &amp; graphic design'
          summary='Modern design mixed with the theory of traditional graphic design.' />
        <Service
          nthChild='odd'
          image='images/design.svg'
          title='Application &amp; website design'
          summary='User-centered website and application design. Using Agile methods to produce quick and effective results.' />
        <Service
          image='images/code.svg'
          title='Front-end development'
          summary='The entire process from rapid prototyping, visual concepts to a fully functional live product.' />
      </div>
    </section>
  )
}

export default Services
