import React, { Component, PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

const Content = ({
  title,
  source
}) => {
  const cx = {
    container: {
      justifyContent: 'space-between',
      paddingBottom: '50px',

      '@media screen and (min-width: 800px)': {
        display: 'flex'
      }
    },
    column: {
      '@media screen and (min-width: 800px)': {
        width: '50%',
        marginRight: '20px',

        ':nth-child(even)': {
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
        <ReactMarkdown source={source} />
      </div>
    </div>
  )
}

export default Content
