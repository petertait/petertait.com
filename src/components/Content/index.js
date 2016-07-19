import { type, breakpoint, layout } from '../../vars'

const Content = ({
  title,
  source,
  html
}) => {
  const cx = {
    container: {
      justifyContent: 'space-between',
      paddingRight: '20px',
      paddingLeft: '20px',
      paddingBottom: '50px',
      margin: 'auto',
      maxWidth: layout.maxWidth,

      [breakpoint.medium]: {
        paddingLeft: layout.gutter,
        paddingRight: layout.gutter,
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
    },
    title: {
      fontWeight: type.fontRegular,
      fontSize: type.bodySize,
      marginBottom: '40px'
    }
  }

  return (
    <div className={cx.container}>
      <div className={cx.column}>
        <h3 className={cx.title}>{title}</h3>
      </div>
      <div className={cx.column}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export default Content
