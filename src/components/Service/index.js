import Isvg from 'react-inlinesvg'

const Service = ({
  title,
  summary,
  image
}) => {
  const cx = {
    service: {
      display: 'block',
      width: '100%',

      '@media screen and (min-width: 900px)': {
        display: 'flex',
        width: 'calc(33% - 5px)',
      }
    },
    odd: {
      margin: '20px 0',

      '@media screen and (min-width: 900px)': {
        margin: '0 10px'
      }
    },
    inner: {
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,0.06)',
      padding: '60px 30px 10px'
    },
    image: {
      display: 'block'
    },
    title: {
      marginTop: '50px',
      marginBottom: '15px'
    }
  }
  
  return (
    <div className={cx.service}>
      <div className={cx.inner}>
        <span className={cx.image}>
          <Isvg src={image} />
        </span>
        <h2 className={cx.title}>{title}</h2>
        <p>{summary}</p>
      </div>
    </div>
  )
}

export default Service
