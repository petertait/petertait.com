import { Link } from 'react-router'

import vars from '../../vars'

const Work = ({
  link,
  title,
  summary
}) => {
  const cx = {
    work: {
      borderBottom: 'none',
      marginBottom: '15px',
      display: 'table',
      cursor: 'not-allowed'
    },
    title: {
      borderBottom: '1px solid',
      marginBottom: '8px',
      display: 'table'
    }
  }

  return (
    <Link to={link} style={cx.work}>
      <h2 className={cx.title}>{title}</h2>
      <p>{summary}</p>
    </Link>
  )
}

export default Work
