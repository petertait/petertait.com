import { type, breakpoint } from '../../vars'

const Content = ({
  title,
  source,
  html
}) => {
  const cx = {
    container: {
      justifyContent: 'space-between',
      paddingBottom: '50px',

      [breakpoint.medium]: {
        display: 'flex'
      }
    },
    column: {
      [breakpoint.medium]: {
        width: '50%',
        marginRight: '20px',

        ':nthChild(even)': {
          marginRight: '20px',
          marginLeft: 0
        }
      }
    }
  }

  return (
    <div className={cx.container}>
      <div className={cx.column}>
        <h3>{title}</h3>
      </div>
      <div className={cx.column}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export default Content
