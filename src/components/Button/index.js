import reactCxs from 'react-cxs'

const Button = () => {
  const button = {
    padding: '10px 15px 12px',
    border: 'none',
    backgroundColor: 'rgba(255,255,255,0.2)'
  }

  return (
    <Button {...props} className={button} />
  )
}

export default Button
